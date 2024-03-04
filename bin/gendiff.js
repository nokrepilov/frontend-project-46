import { Command } from 'commander';
import parseFile from '../src/index.js'; // Импорт функции для парсинга данных из файлов

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
    const data1 = parseFile(filepath1); // Чтение данных из первого файла
    const data2 = parseFile(filepath2); // Чтение данных из второго файла
    console.log('Data from Filepath 1:', data1);
    console.log('Data from Filepath 2:', data2);
    console.log('Format:', options.format || 'default');
  });

program.parse();
