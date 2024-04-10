import { parseFile, readFile, getExt } from './utils.js';
import compareFiles from './compare.js';
import applyFormat from './formatters/index.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const ext1 = getExt(filepath1);
  const data1 = readFile(filepath1);

  const ext2 = getExt(filepath2);
  const data2 = readFile(filepath2);

  const file1 = parseFile(data1, ext1);
  const file2 = parseFile(data2, ext2);

  const diff = compareFiles(file1, file2);

  return applyFormat(diff, format);
};

export default gendiff;
