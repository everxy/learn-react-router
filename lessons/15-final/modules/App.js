import React from 'react'
// lesson3 增加Link,可以在App组件里面点击链接跳转到另外的组件中了
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import home from './home'
export default React.createClass({
  render() {
    return (<div>
      <h1>React router tutorial</h1>
      <ul role="nav">
        {/* Link 和 a标签的一个区别在于：Link可以连接是否激活并设置其style*/}
        {/* 注意这里要使用两个{}将变量包含*/}
        <li><Link to="/about" activeStyle={{ color: 'red' }}>about</Link></li>
        {/* 或者添加类名替代内联样式 */}
        {/*<li><Link to="/repos" activeClassName="active">repos</Link></li>*/}
        
        {/* 将连接封装为一个组件，这样在就可以复用，并且便于管理样式 */}
        
      {/* 这里点击一个，另一个相同路径的链接的样式也会改变！*/ }
        <li><NavLink to="/repos">repos</NavLink></li>
     
        {/* lesson9  indexLink 
            只是单纯的在这里添加根目录的链接，它是一直处于`active`的状态！！  
            因为在子元素active后，父元素也会active，而根节点是所有节点的父节点
            所以在这里引入indexLink
        
        <li><NavLink to="/">Home</NavLink></li>
        <li><IndexLink to="/" activeClassName="active">HOME</IndexLink></li>
       
         但其实IndexLink只是在Link的基础上使用了onlyActiveOnInde属性而已
          所以也可以这样
          <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>
          
          得益于我们在NavLink的定义中使用了 `{...}`扩展运算符，所以我们也可以直接使用定义的NavLink组件！
        */}
        {/*最后的方案就是这样了！*/}
        <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>

      </ul>

      {/* lesson4 add this*/}
      {/* 在这里就可以直接渲染出属于App组件子路由下的其他组件*/}
      {this.props.children || <home />}
    </div>)
  }
})
