// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootNode = document.getElementById('root')

if (rootNode) {
  ReactDOM.render(<App />, rootNode)
}

registerServiceWorker()
