// @flow

import React, { PureComponent } from 'react'
import type { Node } from 'react'

type MyComponentProps = {
  children?: Node
}

export default class MyComponent extends PureComponent<MyComponentProps> {
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}
