import { test, expect } from '@jest/globals';
import { readFile } from '../src/utils.js';
import gendiff from '../src/index.js';

const getString = (str) => String(str).trim();

const jsonStylishResult = readFile('__fixtures__/jsonStylishResult.txt');
const ymlStylishResult = readFile('__fixtures__/ymlStylishResult.txt');

const jsonPlainResult = readFile('__fixtures__/jsonPlainResult.txt');
const ymlPlainResult = readFile('__fixtures__/ymlPlainResult.txt');

const jsonFormatJsonResult = readFile('__fixtures__/jsonFormatJsonResult.txt');
const ymlFormatJsonResult = readFile('__fixtures__/ymlFormatJsonResult.txt');

const json1 = '__fixtures__/file1.json';
const json2 = '__fixtures__/file2.json';
const yml1 = '__fixtures__/file1.yml';
const yml2 = '__fixtures__/file2.yml';

test.each([
  [json1, json2, 'stylish', jsonStylishResult],
  [yml1, yml2, 'stylish', ymlStylishResult],
  [json1, json2, 'plain', jsonPlainResult],
  [yml1, yml2, 'plain', ymlPlainResult],
  [json1, json2, 'json', jsonFormatJsonResult],
  [yml1, yml2, 'json', ymlFormatJsonResult],
])('get diff', (a, b, c, expected) => {
  expect(getString(gendiff(a, b, c))).toEqual(getString(expected));
});
