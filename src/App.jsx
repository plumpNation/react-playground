// @flow

import Flatpickr from 'react-flatpickr'
import MyComponent from './components/MyComponent'
import FunctionAsChildren from './components/FunctionAsChildren'
import React, { Component } from 'react'

import 'flatpickr/dist/themes/material_green.css'
import { Norwegian } from 'flatpickr/dist/l10n/no'
import './App.css'

type AppProps = {}
type AppState = {
  name: string,
  date: Date
}

class App extends Component<AppProps, AppState> {
  state = {
    name: 'Jeff',
    date: new Date()
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

        <Flatpickr options={{locale: Norwegian}} data-enable-time
          value={this.state.date}
          onChange={date => { this.setState({ date }) }} />
      </div>
    )
  }
}

export default App
