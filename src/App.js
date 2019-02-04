import React from 'react'
import './App.css'
import Root from './components/Root'
import store from "./store"
import { Provider } from "react-redux"

class App extends React.Component {
  render() {
    return  (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App
