import fs from 'fs';
import path from 'path';
import getParsedData from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';

const readFile = (filePath) => fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8');
const getExt = (filePath) => path.extname(filePath);

const getData = (filePath1, filePath2) => {
  const file1 = readFile(filePath1);
  const file2 = readFile(filePath2);
  const ext1 = getExt(filePath1);
  const ext2 = getExt(filePath2);

  const obj1 = getParsedData(file1, ext1);
  const obj2 = getParsedData(file2, ext2);

  return { obj1, obj2 };
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const { obj1, obj2 } = getData(filepath1, filepath2);
  const tree = compare(obj1, obj2);
  return formatter(tree, format);
};

export default genDiff;
