# mini-webpack
* 实现过程的核心依赖
* 根据 [@babel/parser](https://www.npmjs.com/package/@babel/parser)将代码转译为 AST 。<br/>
* 根据 [@babel/traverse](https://www.npmjs.com/package/@babel/traverse)解析 AST 获取,每个文件内部的依赖关系。
### import 属于ESM语法webpack无法识别，需要使用require,并且使用 babel/core 把 esm 转为 cjs
### 通过 ejs 配置代码模版，生成合并打包后的js文件。

* babel/core esm 转 cjs 时，如果出现了报错，可以安装 babel-preset-env 插件解决；<br/>
### loader原理：
* 将cjs模块不能识别的文件转译为能被识别的文件<br/>

### plugin 原理：<br/>
* 基于 webpack底层实现的事件机制,在不同的执行过程中会抛出不同的hooks函数,监听这些函数就可以做一些额外的行为
