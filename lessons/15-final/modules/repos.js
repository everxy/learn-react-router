// lesson2 add
import React from "react"
// 一定要注意：当引入的是某一个组件，而不是默认组件时要用 {} ！！！
import { Link } from 'react-router'

import NavLink from './NavLink'

export default React.createClass({
    contextTypes:{
        router:React.PropTypes.object
    },

    handleSubmit(event){
        var event = event || window.event;
        event.preventDefault();
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/repos/${userName}/${repo}`
        console.log(path)
        this.context.router.push(path)
    },

    render(){
        return <div>
            <h2>repos</h2>

            {/* lesson7 url add this  */}
            <ul>
                <li><NavLink to="/repos/reactjs/react-router">react-router</NavLink></li>
                <li><NavLink to="/repos/facebook/react">react</NavLink></li>
                <li>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="userName"  /> / { ' ' }
                        <input type="text" placeholder="repo" />  { ' ' }
                        <button type="submit">Go</button>
                    </form>
                </li>
            
            </ul>
        
        {/* 当点击了链接时，就会渲染子组件, */}
        {this.props.children}
        </div>  


        
    }
}); 