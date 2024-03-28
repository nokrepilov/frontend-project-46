import yaml from 'js-yaml';

const getParsedData = (data, ext) => {
  const extension = ext.startsWith('.') ? ext.slice(1) : ext; // убираем точку перед расширением, если она есть
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown extname: '${ext}'!`);
  }
};

export default getParsedData;
