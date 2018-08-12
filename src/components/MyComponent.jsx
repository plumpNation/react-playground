// @flow

import React, { PureComponent } from 'react'
import type { Node } from 'react'

type MyComponentProps = {
  children?: Node,
  exactObject: {|
    text: string
  |}
}

export default class MyComponent extends PureComponent<MyComponentProps> {
  static defaultProps = {
    exactObject: {
      text: 'boom'
    }
  }

  handleChange = (e: Event) => {
    console.log(e)
  }

  render () {
    return (
      <div>
        {this.props.children}
        <br />
        {this.props.exactObject.text}

        <input onChange={this.handleChange} />
      </div>
    )
  }
}
