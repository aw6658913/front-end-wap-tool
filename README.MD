### 整合Taro+Dva.js 
项目描述：该项目整合了Taro+Dva.js+Mock。也避免以后开发新开发小程序的时候再重新集成dva,相当于一个已经集成dva的taro脚手架。<br>
Taro版本：2.0

#### 安装tarojs/cli
参照Taro官网,建议安装2.2.6版本的taro/cli，3.0版本刚出，有不稳定性。<br>
```javascript
npm install -g @tarojs/cli@2.2.6
```
或
```javascript
yarn global add @tarojs/cli@2.2.6
```
#### 安装依赖
```javascript
npm install
```
### 启动编译微信小程序
---开发环境<br>
```javascript
npm run dev:weapp
```
<br>
---正式环境<br>
```javascript
npm run run:weapp
```

### 启动编译百度小程序
---开发环境<br>
```javascript
npm run dev:swan
```
<br>
---正式环境<br>
```javascript
npm run run:swan
```

### 启动编译支付宝小程序
---开发环境<br>
```javascript
npm run dev:alipay
```
<br>
---正式环境<br>
```javascript
npm run run:alipay
```

### 启动编译H5
---开发环境<br>
```javascript
npm run dev:h5
```
<br>
---正式环境<br>
```javascript
npm run run:h5
```

### 启动编译RN
---开发环境<br>
```javascript
npm run dev:rn
```
<br>
---正式环境<br>
```javascript
npm run run:rn
```

### 创建页面
```javascript
npm run tem 页面名称
```
或
```javascript
yarn tem 页面名称
```

### 创建组件
```javascript
npm run com 页面名称
```
或
```javascript
yarn com 页面名称
```

### 用小程序导入dist目录，即可在微信开发者工具看到运行效果

## 文件目录结构说明

    .
    |-- config/                              // 配置文件夹
    |   |-- dev.js                           // 开发环境配置
    |   |-- index.js                         // 通用配置
    |   |-- prod.js                          // 生产环境配置
    |-- dist/                                // 编译目录
    |-- mock/                                // mock数据
    |-- script/                              // 脚本
    |   |-- component.js                     // 生成组件脚本
    |   |-- template.js                      // 生成页面脚本
    |-- src/                                 // 源码文件夹
    |   |-- assets/                          // 静态资源
    |   |-- components/                      // 应用级通用组件
    |   |-- model/                           // model文件
    |   |-- pages/                           // 页面
    |   |   |./pageA                         
    |   |   |./pageB  
    |   |-- service/                         // 接口请求目录
    |
    |-- .eslintignore                        // eslint忽略文件的配置文件
    |-- .eslintrc.js                         // JS代码风格配置文件
    |-- .gitignore                           // Git忽略文件的配置文件
    |-- .prettierrc.js                       // 代码美化规则配置文件
    |
    |-- jsconfig.json                        // javascript配置文件
    |-- package.json                         // 软件包相关信息的配置文件
    |
    |-- README.md                            // 文档说明