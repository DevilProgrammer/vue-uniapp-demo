# 青海97.2车友会小程序 商家版 jiaoguang972_store

## 安装依赖
```
npm install
```

### 编译和热部署
```
npm run serve
```

### 部署构建
```
npm run build
```

### 自定义配置
参考 [Configuration Reference](https://cli.vuejs.org/config/).



### 项目规范

#### 页面结构规范 

 - `components` 该文件夹包含项目中通用组件以及第三方引用的组件 (根据组件名称创建相应的子文件夹)
 - `pages` 该文件夹包含所有页面 (目录分类根据业务以及项目中的tabbar来划分)
 - `static` 项目所需的静态资源 如图片，相应的json资源等
 - `store` 包含项目中基于VUEX数据处理的逻辑和定义 如 `mutation`, `actions` 等
 - `utils` 包含项目所需通用工具类 如封装的promise化的 request 方法 
 - `styles` 包含项目定义的通用样式文件 项目自定义的样式文件 `*.scss` 
 - `typings` 包含项目中申明的类型，被全剧引用。 类型文件 `*.d.ts`




### eslint 规范
参考 `.eslintrc.js` 文件配置

### Typescript
参考 typescript 相关文档 https://www.tslang.cn/


### Vuex状态管理
参考 https://vuex.vuejs.org/zh/guide/state.html
