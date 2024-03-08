import genDiff from '../src/index.js';

test('if the files have different values', () => {
  const file1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const file2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };
  expect(genDiff(file1, file2)).toBe(false);
});

test('if the files have the same values', () => {
  const file1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const file2 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  expect(genDiff(file1, file2)).toBe(true);
});
