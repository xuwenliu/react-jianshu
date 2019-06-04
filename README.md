<!--
 * @Description: 
 * @Author: xwl
 * @Date: 2019-05-26 08:25:07
 * @LastEditors: xwl
 * @LastEditTime: 2019-06-04 15:00:17
 -->
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### 项目目录结构
    public
        |——api 数据模拟
	src
		|——common 公共组件
			|——header
				|——index.js    header组件
				|——style.js    header样式
				|——store  	 首页相关数据
					|——actionCreator.js  header的actionCreator
					|——actionTypes.js    header的actionTypes
					|——reducer.js        header的reducer
					|——index.js          导出reducer，actionCreator，types 上面三个
		|——pages		   页面
			|——home		首页
				|——index.js    首页组件
				|——style.js    首页样式
				|——components  首页小组件
				|——store  	 首页相关数据
					|——actionCreator.js  首页的actionCreator
					|——actionTypes.js  首页的actionTypes
					|——reducer.js  首页的reducer
					|——index.js  导出reducer，actionCreator，types 上面三个

		|——static		  静态资源
			|——iconfont    字体
			|——img  	   图片
		|——store
			|——index.js    创建最外层store和使用中间件
			|——reducer.js  创建所有的reducer 
		|——App.js   根组件
		|——index.js 入口js文件
		|——style.js 全局公共（reset.css）样式定义


#### 这一块就是基本结构
```
|——home		首页
	|——index.js    首页组件
	|——style.js    首页样式
	|——components  首页小组件
	|——store  	 首页相关数据
		|——actionCreator.js  首页的actionCreator
		|——actionTypes.js  首页的actionTypes
		|——reducer.js  首页的reducer
		|——index.js  导出reducer，actionCreator，types 上面三个
```

### 项目主要使用的技术 详见package.json
1. react react-dom 基础库
2. react-transition-group 动画库   https://reactcommunity.org/react-transition-group/
3. styled-components 样式组件库    https://www.styled-components.com/docs
4. axios
5. redux react-redux
6. immutable redux-immutable redux的数据不可变管理库   https://immutable-js.github.io/immutable-js/docs/#/
7. redux-thunk redux的reducer 异步请求 处理中间件 https://github.com/reduxjs/redux-thunk
7. react-loadable 异步组件加载  https://github.com/jamiebuilds/react-loadable 
    详见 detail 要获取路由参数需要使用withRouter

### 组件为提升性能 采用了 PureComponent定义组件配合redux-immutable使用

