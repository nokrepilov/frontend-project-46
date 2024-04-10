import _ from 'lodash';

const getKeys = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  return _.sortBy(keys);
};

const compareFiles = (data1, data2) => {
  const keys = getKeys(data1, data2);

  const diff = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.has(data1, key) && !_.has(data2, key)) {
      return { key, value1, status: 'deleted' };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { key, value2, status: 'added' };
    }

    // if both data1 and data2 has key
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, children: compareFiles(value1, value2), status: 'nested' };
    }

    if (_.isEqual(value1, value2)) {
      return { key, value1, status: 'unchanged' };
    }

    return {
      key,
      value1,
      value2,
      status: 'changed',
    };
  });

  return diff;
};

export default compareFiles;
