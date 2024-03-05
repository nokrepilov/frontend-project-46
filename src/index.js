import fs from 'fs';
import path from 'path';
import compare from './compare.js';

const readFile = (filePath) => fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8');

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const tree = compare(file1, file2);
  return tree;
};

export default genDiff;
