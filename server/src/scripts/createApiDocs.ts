/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
import fs from 'fs';
import path from 'path';

const getAllFilesInDirWithExtension = (dir: fs.PathLike, extension: string) => {
  const dirCont = fs.readdirSync(dir);
  const files = dirCont.map((file) => {
    const nameParts = file.split('.');
    const _extension = nameParts[nameParts.length - 1];
    if (_extension === extension) {
      const fileName = dir + '/' + file;
      const _file = fs.readFileSync(fileName);
      return _file;
    }
  });
  return files;
};

const getModelAttributes = (modelString: string) => {
  const parts = modelString.split('export ');
  for (const filePart of parts) {
    if (filePart.includes('Attributes') &&
       !filePart.includes('CreationAttributes') && 
       !filePart.includes('import')
    ) {
      const regex = /\Attributes\b/g;
      return filePart.replace(regex, 'Model');
    }
  }
};

const getModelTypesString = (modelFiles: Buffer[]): string => {
  let result = '';
  for (const modelFile of modelFiles) {
    const attributes = getModelAttributes(modelFile.toString());
    if (attributes) {
      result += 'export ' + attributes;
    }
  }
  return result;
};

const modelsPath = path.join(__dirname, '..', 'data', 'models');
const modelFiles = getAllFilesInDirWithExtension(modelsPath, 'ts');

const resultPath = path.join(__dirname, 'api.models.ts');
fs.writeFileSync(resultPath, getModelTypesString(modelFiles));