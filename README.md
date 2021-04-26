### React 项目框架

#### Wepack

##### loader

- css-loader: 解析 css, 支持 import 导入的 css
- style-loader: 将打包好的 css 字符串生成 style 标签插入到 html header 中
- ~~file-loader: 处理其他格式文件，比如图片~~
- url-loader: 类似于 file-loader，文件大小（单位 byte）低于指定限制时，可以返回一个 DataURL
- image-webpack-loader: 图片压缩
