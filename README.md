## Install dependencies

```bash
yarn add semantic-release @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/git @semantic-release/github @semantic-release/release-notes-generator commitizen -D
```

## Start commitzen

```bash
yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

## Create `.releaserc`

```json
{
  "tagFormat": "v${version}",
  "branches": ["main"],
  "plugins": [
    "@semantic-release/changelog",
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ],
    {
      "path": "@semantic-release/git",
      "assets": ["package.json", "package-log.json", "CHANGELOG.md"],
      "message": "chore(release): Published ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    },
    "@semantic-release/github"
  ]
}
```
