import React, { Component } from 'react'
import TextArea from '../TextArea'
import Siderbar from '../Siderbar'

class Root extends Component {
  render() {
    return (
      <div>
        <TextArea />
        <Siderbar />
      </div>
    );
  }
}

export default Root
