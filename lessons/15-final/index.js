import React from 'react'
import { render } from 'react-dom'
// 新增`IndexRoute` 用于默认路由功能
//lesson10 修改为browerHistory，同时在package.json中修改"start": "webpack-dev-server --inline --content-base . --history-api-fallback"
// 需要注意的是在webpack dev server中启用了--history-api-fallback后，我们需要更改index.html中对脚本文件的引用，见index.html
import { Router, browserHistory} from 'react-router'

//lesson13 将route作为组件剥离为routes.js
// import routes

import routes from './modules/routes'
render((

  <Router routes={routes} history={browserHistory} />
), document.getElementById('app'))
