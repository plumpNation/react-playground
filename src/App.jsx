import React, { Component } from 'react'
import './App.css'

import MyComponent from './components/MyComponent'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MyComponent>Hello world</MyComponent>
      </div>
    )
  }
}

export default App
