# react-intl-universal-reporter

> An report generator based on [eslint-plugin-react-intl-universal](https://github.com/victorsoares96/eslint-plugin-react-intl-universal) to measure the number of internationalized and non-internationalized occurrences of a project.

[![npm package](https://img.shields.io/badge/npm%20i-react--intl--universal--reporter-brightgreen)](https://www.npmjs.com/package/react-intl-universal-reporter) [![version number](https://img.shields.io/npm/v/react-intl-universal-reporter?color=green&label=version)](https://github.com/victorsoares96/react-intl-universal-reporter/releases) [![Actions Status](https://github.com/victorsoares96/react-intl-universal-reporter/workflows/Test/badge.svg)](https://github.com/victorsoares96/react-intl-universal-reporter/actions) [![License](https://img.shields.io/github/license/victorsoares96/react-intl-universal-reporter)](https://github.com/victorsoares96/react-intl-universal-reporter/blob/main/LICENSE)

## Installation

```sh
npm install react-intl-universal-reporter --save-dev
```

```sh
yarn add -D react-intl-universal-reporter
```

## Usage

Create a new script in `scripts` object inside `package.json` configuration file. Like this:

```json
"scripts": {
  // other scripts...
  "generate-intl-report": "intl-report --source src"
},
```

## CLI Flags

| Param           | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| `--source`      | The source path to the repository to be analyzed (required)                              |
| `--config-file` | The path to the config file. Default is used or .intlrc will be sought if not specified. |

## Report Config File

This file will be used by the generator, it represents a set of instructions that it needs to work. If you need the generator to work with custom configurations, create a file inside your project called `.intlrc` following this structure below or enter the path of your custom `.intlrc` using the `--config-file` flag.

**_This structure below represents the default configuration of the .intlrc file:_**

```json
{
  "ignorePatterns": [
    "node_modules",
    "**/*.stories.*",
    "**/*.test.*",
    "**/*.spec.*",
    "**/*.e2e.*",
    "**/*.d.ts",
    "**/*.css",
    "**/*.scss"
  ],
  "extensions": ["js", "jsx", "ts", "tsx"],
  "outputDir": "out",
  "outputFormat": "json", // can be xml to
  "debug": false,
  "analyzer": {
    "mode": "jsx-text-only",
    "jsx-components": {
      "include": [],
      "exclude": ["Trans"]
    },
    "jsx-attributes": {
      "include": [],
      "exclude": [
        "className",
        "styleName",
        "style",
        "type",
        "key",
        "id",
        "width",
        "height"
      ]
    },
    "words": {
      "exclude": ["[0-9!-/:-@[-`{-~]+", "[A-Z_-]+"]
    },
    "callees": {
      "exclude": [
        "intl(ext)?",
        "get",
        "set",
        "put",
        "post",
        "delete",
        "patch",
        "append",
        "getHTML",
        "determineLocale",
        "formateHTMLMessage",
        "formatMessage",
        "getInitOptions",
        "init",
        "load",
        "describe",
        "it",
        "push",
        "require",
        "addEventListener",
        "removeEventListener",
        "postMessage",
        "getElementById",
        "dispatch",
        "commit",
        "includes",
        "indexOf",
        "endsWith",
        "startsWith",
        "on",
        "emit"
      ]
    },
    "object-properties": {
      "include": [],
      "exclude": ["[A-Z][a-z]+", "^#[0-9a-f]{3,6}$"]
    },
    "class-properties": {
      "include": [],
      "exclude": ["displayName"]
    },
    "message": "disallow literal string",
    "should-validate-template": true
  },
  "template": {
    "title": "React Intl Universal Reporter"
  }
}
```

## Usage as a function

If you prefer, you can get the summarized data like this:

```js
import { generateResult } from 'react-intl-universal-reporter';

(async () => {
  const result = await generateResult('./src', './.intlrc.json');

  console.log('Result:', result);
})();
```

That asynchronous function above mentioned receives as argument:

- `source`: The source path to the repository to be analyzed (required)
- `configFilePath`: The path to the config file. Default is used or .intlrc founded in your project will be sought if not specified.

That asynchronous function above mentioned returns:

- `result`: The result of the analysis. [See the result structure](src/types.ts#L36)

## Help to improve this project

If you find this project useful, please consider [donating](https://www.paypal.com/donate/?business=YNAUBS5LFN5KN&no_recurring=0&currency_code=USD) to support the development of this project.

## Thanks

- [eslint-detailed-reporter](https://github.com/mportuga/eslint-detailed-reporter) by [mportuga](https://github.com/mportuga), many parts of my project were based on yours.

## License

react-intl-universal-reporter is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
