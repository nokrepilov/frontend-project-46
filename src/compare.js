import _ from 'lodash';

const compare = (data1, data2) => {
  const getComparisonResult = (key, value1, value2) => {
    let result;
    if (!(key in data1)) {
      result = { key, value: value2, type: 'added' };
    } else if (!(key in data2)) {
      result = { key, value: value1, type: 'deleted' };
    } else if (_.isObject(value1) && _.isObject(value2)) {
      result = { type: 'nested', key, children: compare(value1, value2) };
    } else if (value1 !== value2) {
      result = {
        key,
        value1,
        value2,
        type: 'changed',
      };
    } else {
      result = { key, value: value1, type: 'unchanged' };
    }
    return result;
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
