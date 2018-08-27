// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// import App from './App'
// import GridLayout from './GridLayout'
// import Drawer from './Drawer'
// import Recompose from './Recompose'

import PureApp from './PureApp'

import registerServiceWorker from './registerServiceWorker'

const rootNode = document.getElementById('root')

addToHead(robotoFontLink())

if (rootNode) {
  ReactDOM.render(<PureApp />, rootNode)
}

registerServiceWorker()

function addToHead (element: HTMLLinkElement): void {
  const head = document.querySelector('head')

  if (head) head.appendChild(element)
}

function robotoFontLink () {
  const fontLink = document.createElement('link')

  fontLink.rel = 'stylesheet'
  fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'

  return fontLink
}
