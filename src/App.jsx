// @flow

import React, { Component } from 'react'
import './App.css'

import MyComponent from './components/MyComponent'
import FunctionAsChildren from './components/FunctionAsChildren'

type AppProps = {}

class App extends Component<AppProps> {
  render () {
    return (
      <div className='App'>
        <MyComponent exactObject={{text: 'something'}}>
          Hello world
        </MyComponent>

        <FunctionAsChildren name='jeff'>
          {({name}) => <button>{name}</button>}
        </FunctionAsChildren>
      </div>
    )
  }
}

export default App
