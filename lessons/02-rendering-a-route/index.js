import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/App'
import repos from './modules/repos'
import about from './modules/about'

render((
<Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/repos" component={repos} />
    <Route path="/about" component={about} />
</Router>
), document.getElementById('app'))
