const ALWAYS_IGNORE = [
  '<rootDir>/dist',
  '/node_modules/'
];

module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ALWAYS_IGNORE,
  coveragePathIgnorePatterns: ALWAYS_IGNORE
};
