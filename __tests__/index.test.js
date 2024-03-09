import genDiff from '../src/index.js';

test('should return empty object for two empty files', () => {
  const filePath1 = '__tests__/fixtures/empty1.yml';
  const filePath2 = '__tests__/fixtures/empty2.yml';
  const diff = genDiff(filePath1, filePath2);
  expect(diff).toEqual('{}'); // Сравниваем с пустой JSON-строкой
});

test('should return differences for files with different content', () => {
  const filePath1 = '__tests__/fixtures/file1.yml';
  const filePath2 = '__tests__/fixtures/file2.yml';
  const diff = genDiff(filePath1, filePath2);
  const expectedDiff = {
    '- common': 'value',
    '+ common': 'different value',
    ' setting1': 'Value 1',
    ' setting2': '200',
    '- setting3': true,
    '+ setting3': null,
    '- setting4': 'blah blah',
    '+ setting5': {
      key5: 'value5',
    },
  };
  expect(diff).toEqual(expectedDiff); // Сравниваем с ожидаемой JSON-строкой
});
