/* eslint-disable no-constant-condition */
/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import fs from 'fs';
import path from 'path';

const getAllFilesInDirWithExtension = (dir: fs.PathLike, extension: string) => {
  const dirCont = fs.readdirSync(dir);
  const files = dirCont.map((file) => {
    const nameParts = file.split('.');
    const reversedNameParts = nameParts.reverse();
    const neededNameParts = extension.split('.');
    const reversedNeededNameParts = neededNameParts.reverse();
    let isEqual = true;
    for (let i = 0; i < reversedNeededNameParts.length; i++) {
      if (reversedNameParts[i] !== reversedNeededNameParts[i]) {
        isEqual = false;
        break;
      }
    } 
    if (isEqual) {
      const fileName = dir + '/' + file;
      const _file = fs.readFileSync(fileName);
      return _file;
    }
  });
  const notNullFiles = files.filter(file => file);
  return notNullFiles;
};

const getModels = (modelString: string): string[] => {
  const parts = modelString.split('export ');
  const models = [];
  for (const filePart of parts) {
    if (filePart.includes('Attributes') &&
      //  !filePart.includes('CreationAttributes') && 
       !filePart.includes('import')
    ) {
      const regex = /\Attributes\b/g;
      models.push(filePart.replace(regex, 'Model'));
      if (models.length === 2)
        break;
    }
  }
  return models;
};

const getModelTypesString = (modelFiles: Buffer[]): string => {
  let result = '';
  for (const modelFile of modelFiles) {
    const models = getModels(modelFile.toString());
    // console.log(attributes);
    if (models) {
      for (const model of models) {
        result += 'export ' + model;
      }
    }
  }
  return result;
};

const getModelImportsString = (requestStrings: string[], modelsPath: fs.PathLike): string => {
  const imports: string[] = [];
  for (const requestString of requestStrings) {
    const values = requestString.split(':').filter((val, index) => index % 2 === 1);
    for (const value of values) {
      const modelIndex = value.indexOf('Model');
      if (modelIndex > 0) {
        const modelName = value.substring(1, value.indexOf(';'));
        // const modelFile = modelsPath.toString().substring(0, modelsPath.toString().indexOf('.ts'));
        const modelFile = './api.models'
        imports.push(`import { ${modelName} } from '${modelFile}';\n`);
      }
    }
  }
  const uniqueImports = [...new Set(imports)];
  return uniqueImports.join('\n');
}

const getRequests = (schemaString: string): string[] => {
  const requestStrings: string[] = [];
  const requests = schemaString.split('export');
  for (let i = 1; i < requests.length; i++) {
    const request = requests[i];
    const openInterfaceBracketIndex = request.indexOf('{');
    const closeInterfaceBracketIndex = request.lastIndexOf('}');
    if (openInterfaceBracketIndex < 0 || closeInterfaceBracketIndex < 0 || !request.includes('FastifyRequest'))
      continue;
    const regex = /\Attributes\b/g;
    const interfaceContent = request.substring(openInterfaceBracketIndex, closeInterfaceBracketIndex + 1).replace(regex, 'Model');
    const interfaceName = request.substring(request.indexOf('type') + 5, request.indexOf('=') - 1);
    requestStrings.push(`export interface ${interfaceName} ${interfaceContent}\n`);
  }
  return requestStrings;
}

const getRequestsString = (schemaFiles: Buffer[],  modelsPath: fs.PathLike): string => {
  let result = '';
  for (const schemaFile of schemaFiles) {
    const requests = getRequests(schemaFile.toString());
    const imports = getModelImportsString(requests, modelsPath);
    result += imports;
    if (requests) {
      for (const request of requests) {
        result += request;
      }
    }
  }
  return result;
}

const bannedWords = [
  'mergeFilters',
  '[Op.ne]'
]

const containBannedWord = (str: string): boolean => {
  for (const bannedWord of bannedWords) {
    if (str.includes(bannedWord))
      return true;
  }
  return false
}

const removeStringFromCenter = (str: string, index1: number, index2: number) => {
  return str.substring(0, index1) + str.substring(index2, str.length - 1);
}

const getFilter = (_filterString: string): string => {
  let filterString = _filterString;
  if (filterString.includes('class')) {
    console.log('AAA');
    const classRegex = /\class\b/g;
    filterString = filterString.replace(classRegex, 'interface');
    const extendsRegex = /\extends\b/g;
    filterString = filterString.replace(extendsRegex, 'implements');
    const constructorStart = filterString.indexOf('constructor');
    const constructorEnd = filterString.indexOf('}');
    filterString = removeStringFromCenter(filterString, constructorStart, constructorEnd);
    // console.log(filterString);
    while (true) {
      const typeStart = filterString.indexOf('=');
      const typeEnd = filterString.indexOf(';');
      // console.log(typeStart, typeEnd);
      if (typeStart < 0 || typeEnd < 0)
        break;
      // console.log(removeStringFromCenter(filterString, typeStart, typeEnd));
      filterString = removeStringFromCenter(filterString, typeStart, typeEnd);
    }
    console.log(filterString);
    return filterString;
  }
}

const getFiltersString = (filterFiles: Buffer[]): string => {
  let result = '';
  for (const filterFile of filterFiles) {
    const filterString = filterFile.toString();
    const filtersContent = filterString.split('export ');
    for (let i = 1; i < filtersContent.length; i++) {
      const filterContent = filtersContent[i];
      if (containBannedWord(filterContent))
        continue;
      result += getFilter(filterContent);
    }
  }
  return result;
}

const modelsPath = path.join(__dirname, '..', 'data', 'models');
const modelFiles = getAllFilesInDirWithExtension(modelsPath, 'ts');
const modelResultPath = path.join(__dirname, 'api.models.ts');
fs.writeFileSync(modelResultPath, getModelTypesString(modelFiles));

const filtersPath = path.join(__dirname, '..', 'data', 'repositories', 'filters');
const filterFiles = getAllFilesInDirWithExtension(filtersPath, 'ts');
const filtersResultPath = path.join(__dirname, 'api.filters.ts');
fs.writeFileSync(filtersResultPath, getFiltersString(filterFiles));

const schemasPath = path.join(__dirname, '..', 'api', 'routes');
const schemaFiles = getAllFilesInDirWithExtension(schemasPath, 'schema.ts');
const requestResultPath = path.join(__dirname, 'api.requests.ts');
fs.writeFileSync(requestResultPath, getRequestsString(schemaFiles, modelResultPath));
