#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .version('1.0.0', '-V, --version', 'output the version number')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log('Filepath 1:', filepath1);
    console.log('Filepath 2:', filepath2);
    console.log('Format:', options.format || 'default');
  });

program.parse();
