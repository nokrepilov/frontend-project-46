import _ from 'lodash';

const compare = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort(); // Получаем все ключи и сортируем их
  const diffLines = keys.map((key) => {
    if (!_.has(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    }
    if (_.isEqual(data1[key], data2[key])) {
      return `  ${key}: ${data1[key]}`;
    }
    return `- ${key}: ${data1[key]} + ${key}: ${data2[key]}`;
  });
  return `{${diffLines.join(' ')}}`;
};

export default compare;
