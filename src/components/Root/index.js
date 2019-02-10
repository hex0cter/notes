import React, { Component } from 'react'
import TextArea from '../TextArea'
import SiderBar from '../Siderbar'

class Root extends Component {
  render() {
    return (
      <div>
        <TextArea />
        <SiderBar />
      </div>
    );
  }
}

export default Root
