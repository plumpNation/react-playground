// @flow

import React, { Component } from 'react'
import './App.css'

import MyComponent from './components/MyComponent'
import FunctionAsChildren from './components/FunctionAsChildren'

type AppProps = {}
type AppState = {
  name: string
}

class App extends Component<AppProps, AppState> {
  state = {
    name: 'Jeff'
  }

  handleClick = () => {
    this.setState({
      name: ['Jane', 'Jeff', 'Jemima', 'Fred'][Math.round(Math.random() * 3)]
    })
  }

  render () {
    return (
      <div className='App'>
        <MyComponent exactObject={{text: 'something'}}>
          Hello world
        </MyComponent>

        <FunctionAsChildren name={this.state.name} onClick={this.handleClick}>
          {({name, onClick}) => <button onClick={onClick}>{name}</button>}
        </FunctionAsChildren>
      </div>
    )
  }
}

export default App
