module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/flowteur-ssr',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'flowteur-ssr',
  testEnvironment: 'node',
};
