import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth - 10, height: window.innerHeight });
  }

  render() {
    console.log(`width: ${this.state.width} height ${this.state.height} `)

    return (
      <textarea autoFocus style={{width: this.state.width, height: this.state.height}}>
      </textarea>
    );
  }
}

export default App;
