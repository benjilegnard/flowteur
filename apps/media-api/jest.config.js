module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/media-api',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'media-api',
  testEnvironment: 'node',
};
