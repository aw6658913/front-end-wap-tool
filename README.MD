### 整合Taro+Dva.js 
项目描述：该项目整合了Taro+Dva.js。也避免以后开发新开发小程序的时候再重新集成dva,相当于一个已经集成dva的taro脚手架。<br>
Taro版本：2.0

#### 安装tarojs/cli
参照Taro官网,建议安装2.2.6版本的taro/cli，3.0版本刚出，有不稳定性，同时在做项目的时候3.0还没出。<br>
```javascript
npm install -g @tarojs/cli
```
或
```javascript
yarn global add @tarojs/cli
```
#### 安装依赖
```javascript
npm install
```
### 启动编译小程序
```javascript
npm run dev:weapp
```
<br>
如果是 `command not found:trao` 运行：
```javascript
npm i -g @tarojs/cli@2.2.6
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
