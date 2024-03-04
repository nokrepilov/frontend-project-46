import fs from 'fs';

const parseFile = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(data);
};

export default parseFile;
