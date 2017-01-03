import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import repos from './modules/repos'
import about from './modules/about'


// lesson2 增加router，根节点变为Router
// history：实际使用中应该使用 browerHistory，但是这个需要后台服务器有准备处理URL
// 这里使用hashHistory更适合学习时使用
render((
<Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/repos" component={repos} />
    <Route path="/about" component={about} />
</Router>
), document.getElementById('app'))
