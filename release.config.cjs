module.exports = {
  branches: ['aaa'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'CHANGELOG.md',
          'android/app/build.gradle',
          'ios/*.xcodeproj/project.pbxproj',
        ],
        message:
          'PF-0000: bump version ${nextRelease.version} \n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        addReleases: 'top',
      },
    ],
  ],
};
