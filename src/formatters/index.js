import doStylish from './stylish.js';
import doPlain from './plain.js';

const applyFormat = (diff, format) => {
  switch (format) {
    case 'stylish':
      return doStylish(diff);

    case 'plain':
      return doPlain(diff);

    case 'json':
      return JSON.stringify(diff);

    default:
      throw new Error(`Unknown format name: ${format}!`);
  }
};

export default applyFormat;
