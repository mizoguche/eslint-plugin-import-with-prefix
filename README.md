# eslint-plugin-import-with-prefix

Enforce specific namespace import to add prefix

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-import-with-prefix`:

```
$ npm install eslint-plugin-import-with-prefix --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-with-prefix` globally.

## Usage

Add `import-with-prefix` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["import-with-prefix"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "import-with-prefix/import-with-prefix": [
      2,
      { "from": "@material-ui/core", "prefix": "Mui" }
    ]
  }
}
```

## Supported Rules

- Add prefix to specific namespace
