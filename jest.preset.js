const nxPreset = require('@nx/jest/preset').default

module.exports = {
  ...nxPreset,
  collectCoverageFrom: [
    '**/*.(t|j)s',
    '!**/*mock.(t|j)s, !**/*spec.(t|j)s, !**/*module.(t|j)s, !**/index.(t|j)s',
    '!instrument.ts',
    '!main.ts',
  ],
  coveragePathIgnorePatterns: ['/__test__/'],
  coverageReporters: ['text', 'lcov', 'json'],
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
}
