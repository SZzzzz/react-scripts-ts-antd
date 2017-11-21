# 集成 antd(antd-mobile) 配置的 react-scripts-ts
基于 react-scripts-ts 二次开发.
## Usage
`create-react-app myapp --scripts-version=react-scripts-ts-antd`

## Feature
### 集成 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin), 实现 antd 组件以及样式的按需引入
```
// source
import { Card } from 'antd';

// output
import Card from 'antd/lib/card';
import Card from 'antd/lib/card/style/index.less';
```

Note: 因为在 `ts-loader` 中配置了 `transpileOnly: true` 关闭了静态类型检查,所以引入了 [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) 进行静态类型检查.

### 支持 `scss` 和 `less`
- `less` 支持基于 `less-loader`.
- `scss` 支持基于 `postcss` 的 [precss](https://github.com/jonathantneal/precss) 插件包实现.


###  额外开启了 `tsconfig.json` 中的选项.
```
// tsconfig.json
{
    "allowSyntheticDefaultImports": "true",
    "experimentalDecorators": "true"
}
```

### 集成 [react-app-rewired](https://github.com/timarney/react-app-rewired) 功能
可以通过项目根目录下的`config-overrider.js`文件修改 Webpack 配置.
```
// 所有默认的 loader 配置可以同过以下方式获取
const { loaders } = require('react-scripts-ts-antd');
```

#### example
例如比较常见的通过覆盖 less 变量设置 antd 主题.
```
// index.less
@import "~antd/dist/antd.less";
@primary-color: #000;

```
此时已经引入了所有的 antd 样式, `ts-import-plugin` 又会重复引入一次, 所以就需要配置 `config-overrides.js` 来防止重复引入.
```
// config-overrides.js
const { getLoader } = require("react-app-rewired");

module.exports = function override(config, env) {

  // 拿到 tsloader
  const tsloader = getLoader(
    config.module.rules,
    rule => String(rule.test) == String(/\.(ts|tsx)$/)
  );

  // 重新设置 options
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


### 默认自动安装 `antd` 包, `antd-mobile` 包需要自己手动安装.

## react-scripts
This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
