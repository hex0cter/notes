import React, { Component } from 'react'
import TextArea from '../TextArea'
import SiderBar from '../SiderBar'

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
