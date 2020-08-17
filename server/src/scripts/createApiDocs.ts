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
    if (filePart.includes('Attributes') && !filePart.includes('import')) {
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

// const getModelImportsString = (model): string => {
//   const imports: string[] = [];
//   for (const requestString of requestStrings) {
//     const values = requestString.split(':').filter((val, index) => index % 2 === 1);
//     for (const value of values) {
//       const modelIndex = value.indexOf('Model');
//       if (modelIndex > 0) {
//         const modelName = value.substring(1, value.indexOf(';'));
//         // const modelFile = modelsPath.toString().substring(0, modelsPath.toString().indexOf('.ts'));
//         const modelFile = './api.models'
//         imports.push(`import { ${modelName} } from '${modelFile}';\n`);
//       }
//     }
//   }
//   const uniqueImports = [...new Set(imports)];
//   return uniqueImports.join('\n');
// }

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

const getPosition = (string: string, subString: string, index: number): number => {
  return string.split(subString, index).join(subString).length;
}

const getRequestsString = (
  requestFiles: Buffer[],
  filtersString: string,
  filtersPath: fs.PathLike,
  modelsString: string,
  modelsPath: fs.PathLike
): string => {
  const filterImports = filtersString.split('export ')
                                     .map(filter => {
                                        const nameStart = getPosition(filter, ' ', 1) + 1;
                                        const nameEnd = getPosition(filter, ' ', 2);
                                        const name = filter.substring(nameStart, nameEnd);
                                        console.log(name);
                                        return name;
                                     })
                                     .map(filterName => {
                                       const bannedRegex = /<T>/g;
                                       return filterName.replace(bannedRegex, '').replace('\\', '/');
                                     })
                                     .map(filterName => `import { ${filterName} } from '${filtersPath.toString().replace(/\.ts\b/g, '')}'`)
                                     .join(';\n');
  const modelImports = modelsString.split('export ')
                                   .map(model => {
                                      const nameStart = model.indexOf(' ');
                                      const nameEnd = model.indexOf('=');
                                      const name = model.substring(nameStart, nameEnd);
                                      return name;
                                   })
                                   .map(modelName => `import { ${modelName} } from '${modelsPath}'`)
                                  .join('\n');
  // const _imports: string[] = [];
  // const _requests: string[] = [];
  // for (const schemaFile of schemaFiles) {
  //   const requests = getRequests(schemaFile.toString());
  //   const imports = getModelImportsString(requests, modelsPath);
  //   _imports.push(imports)
  //   if (requests) {
  //     _requests.push(...requests);
  //   }
  // }
  // return _imports.join('') + _requests.join('\n');
  return filterImports + '\n' + modelImports;
}

const removeStringFromCenter = (str: string, index1: number, index2: number) => {
  return str.substring(0, index1) + str.substring(index2, str.length);
}

const containBannedWord = (str: string, bannedWords: string[]): boolean => {
  for (const bannedWord of bannedWords) {
    if (str.includes(bannedWord))
      return true;
  }
  return false
}

const getFilters = (filterString: string): string => {
  const bannedWords = [
    'import',
    'eslint'
  ]
  const filters = filterString.split('export ')
                              .filter(filter => !containBannedWord(filter, bannedWords))
                              .map(filter => filter.replace(/class\b/g, 'interface'))
                              .map(filter => {
                                const constructorStart = filter.indexOf('constructor');
                                const constructorEnd = filter.indexOf('}') + 4;
                                return removeStringFromCenter(filter, constructorStart, constructorEnd);
                              })
                              .map(filter => {
                                while (true) {
                                  const typeStart = filter.indexOf('=') - 1;
                                  const typeEnd = filter.substring(typeStart, filter.length).indexOf(';') + typeStart;
                                  if (typeStart < 0 || typeEnd < 0)
                                    break;
                                  filter = removeStringFromCenter(filter, typeStart, typeEnd);
                                }
                                return `export ${filter}`;
                              })
                              .join('')
  return filters;
}

const getFilterTypesString = (typeString: string): string => {
  const bannedWords = [
    'import',
    '[Op.ne]',
    'eslint'
  ]

  const types = typeString.split('export ')
                          .filter(type => !containBannedWord(type, bannedWords))
                          .map(type => `export ${type}`)
                          .join('');
  return types;
}

const getFiltersString = (filterFiles: Buffer[], typeFiles: Buffer[]): string => {
  const filters = getFilterTypesString(typeFiles.toString())
                 .concat(
                   ...filterFiles.map(filterFile => getFilters(filterFile.toString()))
                 )
  return filters;
}

const modelsPath = path.join(__dirname, '..', 'data', 'models');
const modelFiles = getAllFilesInDirWithExtension(modelsPath, 'ts');
const modelResultPath = path.join(__dirname, 'api.models.ts');
fs.writeFileSync(modelResultPath, getModelTypesString(modelFiles));

const filtersPath = path.join(__dirname, '..', 'data', 'repositories', 'filters');
const filterFiles = getAllFilesInDirWithExtension(filtersPath, 'filter.ts');
const filterTypeFiles = getAllFilesInDirWithExtension(filtersPath, 'types.ts');
const filtersResultPath = path.join(__dirname, 'api.filters.ts');
fs.writeFileSync(filtersResultPath, getFiltersString(filterFiles, filterTypeFiles));

const schemasPath = path.join(__dirname, '..', 'api', 'routes');
const schemaFiles = getAllFilesInDirWithExtension(schemasPath, 'schema.ts');
const requestResultPath = path.join(__dirname, 'api.requests.ts');
fs.writeFileSync(requestResultPath, getRequestsString(
  schemaFiles,
  fs.readFileSync(filtersResultPath).toString(),
  filtersResultPath,
  fs.readFileSync(modelResultPath).toString(),
  modelResultPath
));
