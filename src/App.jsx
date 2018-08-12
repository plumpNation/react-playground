// @flow
import React, { Component } from 'react'
import './App.css'

import MyComponent from './components/MyComponent'
type AppProps = {}

class App extends Component<AppProps> {
  render () {
    return (
      <div className='App'>
        <MyComponent exactObject={{text: 'something'}}>
          Hello world
        </MyComponent>

      </div>
    )
  }
}

export default App
