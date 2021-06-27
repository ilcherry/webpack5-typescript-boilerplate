# webpack5 typescript boilerplate

>A simple React Application boilerplate with Typescript.

## Main features

✔️ **Completely build using esbuild, no babel**

✔️ **Use future css syntax,no scss/less/stylus**

# Directory Organization

The following is the main code directory arrangement.

```
.
├── fiddler         // REST Client 用到的文件
├── mock            // 模拟数据
├── public          // favicon 等静态资源文件
├── src
│   ├── actions     // Action 和 dispatch 方法
│   ├── assets      // svg 图标和 iconfont 文件
│   │── components  // 公共组件
│   ├── constants   // 常量
│   ├── hooks       // custom hooks 方法
│   ├── layouts      // 布局组件
│   ├── pages       // 业务组件
│   ├── routes      // 路由
│   ├── reducers    // reducers 方法
│   ├── sagas       // 异步请求方法
│   ├── styles      // 公共样式
│   ├── tests       // 单元测试
│   └── utils       // 工具相关的方法
├──typings          // 类型定义文件
└──webpack          // webpack 配置文件

```

# How to use

1. Clone the boilerplate repo.

```sh
git clone https://github.com/qinghuanI/webpack5-typescript-boilerplate.git
```

2. `pnpm i` to install npm packages.
3. Convert svg picture to font icon with `pnpm run build:icon`.
4. Start dev server using `pnpm run dev`.
5. Build and bundling your resources for production `pnpm run build`.
