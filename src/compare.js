import _ from 'lodash';

const compare = (data1, data2) => {
  const getComparisonResult = (key, value1, value2) => {
    if (!(key in data1)) {
      return { key, value: value2, type: 'added' };
    }
    if (!(key in data2)) {
      return { key, value: value1, type: 'deleted' };
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      return { type: 'nested', key, children: compare(value1, value2) };
    }
    if (value1 !== value2) {
      return {
        key,
        value1,
        value2,
        type: 'changed',
      };
    }
    return { key, value: value1, type: 'unchanged' };
  };

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.union(keys1, keys2);
  const sortKeys = _.sortBy(allKeys);

  return sortKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    return getComparisonResult(key, value1, value2);
  });
};

export default compare;
