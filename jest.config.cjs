module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'], // указывает, какие файлы должны быть включены в отчёт о покрытии
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // определяет форматы отчётов о покрытии
};
