import React from 'react'
// lesson3 增加Link,可以在App组件里面点击链接跳转到另外的组件中了
import { Link } from 'react-router'
import { NavLink } from './NavLink'

export default React.createClass({
  render() {
    return (<div>
      <h1>React router tutorial</h1>
      <ul role="nav">
        {/* Link 和 a标签的一个区别在于：Link可以连接是否激活并设置其style*/}
        {/* 注意这里要使用两个{}将变量包含*/}
        <li><Link to="/about" activeStyle={{ color: 'red' }}>about</Link></li>
        {/* 或者添加类名替代内联样式 */}
        <li><Link to="/repos" activeClassName="active">repos</Link></li>
        
        {/* 将连接封装为一个组件，这样在就可以复用，并且便于管理样式 */}
        <li><NavLink to="/repos">repos</NavLink></li>
     
      </ul>

      {/* lesson4 add this*/}
      {/* 在这里就可以直接渲染出属于App组件子路由下的其他组件*/}
      {this.props.children}
    </div>)
  }
})
