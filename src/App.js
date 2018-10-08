import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sessionId: 'local-notes' /*Date.now()*/, text: '', width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.textUpdateHandler = this.textUpdateHandler.bind(this);
  }

  componentDidMount() {
    /*
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      console.log( localStorage.key( i ) );
    }
    */

    const history = localStorage.getItem('local-notes')
    if (history) {
      this.setState({text: history})
    }

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth - 10, height: window.innerHeight });
  }

  textUpdateHandler(event) {
    this.setState({text: event.target.value})
    localStorage.setItem(this.state.sessionId, event.target.value)
  }

  render() {
    return (
      <textarea value={this.state.text} autoFocus style={{width: this.state.width, height: this.state.height}} onChange={this.textUpdateHandler}>
      </textarea>
    );
  }
}

export default App;
