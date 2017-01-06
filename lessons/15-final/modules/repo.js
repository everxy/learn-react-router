//lesson7 新增url params
// urls应该是类似于这样的 ： /repos/:username/:repoName
//以 ：开始的部分会被解析，作为参数被传入this.props.params[name]，可以通过这样来访问该组件
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
      {/* 这里我们直接将其显示出来 */}
        <h2>{this.props.params.userName + "/" + this.props.params.repoName}</h2>
      </div>
    )
  }
})
