// lesson13 add routes.js
// 将route作为一个组件，从index.js中拷贝过来并且做相应的修改
// 将Router根节点删除，去掉多余的引入组件

import React from 'react'
import { render } from 'react-dom'
// 新增`IndexRoute` 用于默认路由功能
//lesson10 修改为browerHistory，同时在package.json中修改"start": "webpack-dev-server --inline --content-base . --history-api-fallback"
// 需要注意的是在webpack dev server中启用了--history-api-fallback后，我们需要更改index.html中对脚本文件的引用，见index.html
import { Route, IndexRoute} from 'react-router'

import App from './App'
import repos from './repos'
import about from './about'
import repo from './repo'
import home from './home'

// lesson2 增加router，根节点变为Router
// 通过lesson2，实现了最基本的页面跳转
// history：实际使用中应该使用 browerHistory，但是这个需要后台服务器有准备处理URL
// 这里使用hashHistory更适合学习时使用
module.exports = (
// <Router history={hashHistory}>
//  <Route path="/" component={App} />
//      <Route path="/repos" component={repos} />
//      <Route path="/about" component={about} />

// lesson4 嵌套路由，让路由嵌套，这样就可以复用我们的导航栏，而不必在每个组件页面去渲染它
// 首先让分支作为根节点的子节点
// 然后进入App.js进一步调整

    <Route path="/" component={App}>
        
        {/* 如果没有indexRoute，在访问`/`目录时，内容主体页面是空的  */}
        <IndexRoute component={home}/>
      <Route path="/repos" component={repos} >

      {/*  在index中我们这样指定path ：后的部分作为参数传入 repo组件的所获取params[name] 
            这里点击repos组件会创建两个链接，然后通过以下规则传入到repo组件中
    
      <Route path="/repos/:userName/:repoName" component={repo}/>
      */}

      {/* 进一步的嵌套,将repo组件嵌套在repos中，然后在repos组件中使用 this.props.children渲染子组件
        在父组件中会直接显示子组件，而不是像上面为嵌套的那样将其替换  
        */}
        <Route path="/repos/:userName/:repoName" component={repo}/>
      </Route>
      <Route path="/about" component={about}/>
    </Route>
)
