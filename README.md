# Create React apps (with Typescript and antd) with no build configuration.
base on [react-scripts-ts@2.13.0](https://github.com/wmonk/create-react-app-typescript)

## Usage
create a new project with [create-react-app](https://github.com/facebook/create-react-app)
```
create-react-app myapp --scripts-version=react-scripts-ts-antd
```

## Features
### Include [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) for importing components on demand. 
```
// source
import { Card } from 'antd';

// output
import Card from 'antd/lib/card';
import Card from 'antd/lib/card/style/index.less';
```

### Include [react-app-rewired](https://github.com/timarney/react-app-rewired)
You can rewire your webpack configurations without eject.
```
// You can get all default loads
const { loaders } = require('react-scripts-ts-antd');
```

### Support `scss` and `less`
- use `less-loader` for `less`.
- use [precss](https://github.com/jonathantneal/precss) for `scss`.



### Turn on some options of compileOptions in `tsconfig.json`.
```
// tsconfig.json
{
    "allowSyntheticDefaultImports": "true",
    "experimentalDecorators": "true"
}
```

## Tips

### How to avoid importing styles twice
If you want to customize theme by [overriding less variables](https://ant.design/docs/react/customize-theme) like below.

```
// index.less
@import "~antd/dist/antd.less";
@primary-color: #000;

```

You have imported all styles and `ts-import-plugin` will import styles again. So you need to reset `ts-loader` options by modifying `config-overrides.js` to avoid importing styles twice.
```
// config-overrides.js
const { getLoader } = require("react-app-rewired");

module.exports = function override(config, env) {

  // get tsloader
  const tsloader = getLoader(
    config.module.rules,
    rule => String(rule.test) == String(/\.(ts|tsx)$/)
  );

  // set new options
  tsloader.options = {
    transpileOnly: true,
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory([
          {
            libraryName: 'antd',
            libraryDirectory: 'lib',
          },
          {
            libraryName: 'antd-mobile',
            libraryDirectory: 'lib',
          }
        ])
      ]
    })
  }
  return config;
};

```

### `antd` package will be installed automatically.If you need `antd-mobile`, install it manually.

## react-scripts
This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
