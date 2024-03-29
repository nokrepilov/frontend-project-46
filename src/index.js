import fs from 'fs';
import path from 'path';
import getParsedData from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';

const readFile = (filePath) => fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8');
const getExt = (filePath) => path.extname(filePath);

const getData = (filePath) => {
  const fileContent = readFile(filePath);
  const ext = getExt(filePath);
  const obj = getParsedData(fileContent, ext);
  return obj;
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const tree = compare(data1, data2);
  return formatter(tree, format);
};

export default genDiff;
