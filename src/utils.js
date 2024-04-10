import path from 'path';
import fs from 'fs';
import process from 'process';
import yaml from 'js-yaml';

const __dirname = process.cwd();

const getFilePath = (filename) => path.resolve(__dirname, filename);

const readFile = (filename) => fs.readFileSync(getFilePath(filename), 'utf-8');

const getExt = (filename) => path.extname(filename);

const parseFile = (data, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data);
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown format: ${ext}!`);
  }
};

export { readFile, getExt, parseFile };
