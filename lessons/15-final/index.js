import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import repos from './modules/repos'
import about from './modules/about'


// lesson2 增加router，根节点变为Router
// 通过lesson2，实现了最基本的页面跳转
// history：实际使用中应该使用 browerHistory，但是这个需要后台服务器有准备处理URL
// 这里使用hashHistory更适合学习时使用
render((
// <Router history={hashHistory}>
//  <Route path="/" component={App} />
//      <Route path="/repos" component={repos} />
//      <Route path="/about" component={about} />

// lesson4 嵌套路由，让路由嵌套，这样就可以复用我们的导航栏，而不必在每个组件页面去渲染它
// 首先让分支作为根节点的子节点
// 然后进入App.js进一步调整
<Router history={hashHistory}>
    <Route path="/" component={App} >
        <Route path="/repos" component={repos} />
        <Route path="/about" component={about} />
    </Route>
</Router>
), document.getElementById('app'))
