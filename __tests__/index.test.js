import genDiff from '../src/index.js';

const path = require('path');
const fs = require('fs');

const projectDir = path.resolve(__dirname, '..'); // абсолютный путь к директории проекта

const getFixturePath = (filename) => path.join(projectDir, '__fixtures__', filename); // путь к фикстурам
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8'); // чтение фикстур

const extensions = ['yml', 'json'];

describe.each(['stylish', 'plain', 'json'])('genDiff test with formatter %s', (formatter) => {
  test.each(extensions)('genDiff test with extension %s', (ext) => {
    const fileBefore = getFixturePath(`file1.${ext}`);
    const fileAfter = getFixturePath(`file2.${ext}`);
    const expectedOutput = readFile(`expected_${formatter}.txt`);

    expect(genDiff(fileBefore, fileAfter, formatter)).toBe(expectedOutput);
  });
});
