module.exports = {
  name: 'medias-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/medias-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
