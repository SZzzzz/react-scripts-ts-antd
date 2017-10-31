# 集成 antd(antd-mobile) 配置的 react-scripts-ts
基于 react-scripts-ts 修改.
## usage
`create-react-app myapp --scripts-version=react-scripts-ts-antd`

## feature
### 集成 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) ,实现 antd 组件以及样式的按需引入
```
// source
import { Card } from 'antd';

// output
import Card from 'antd/lib/card';
import Card from 'antd/lib/card/style/index.less';
```

因为在 `ts-loader` 中使用了 `transpileOnly: true` 关闭了静态类型检查,引入了 [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) 进行静态类型检查.

### 支持 `scss` 和 `less`
`less` 支持基于 `less-loader`.
`scss` 支持基于 `postcss` 的 [precss](https://github.com/jonathantneal/precss) 插件包实现.


### 开启了 `tsconfig.json` 文件 `compilerOptions` 中的 `allowSyntheticDefaultImports` 和 `experimentalDecorators` 选项.

### 自动安装 `antd` 包, `antd-mobile` 包需要手动安装.

## TODO
- 集成 [react-app-rewired](https://github.com/timarney/react-app-rewired) 功能,支持通过 `config-overrider.js` 修改配置.

## react-scripts
This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
