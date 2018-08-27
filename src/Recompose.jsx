/**
 * Playing with recompose to figure out it's power
 */

import {
  defaultProps,
  componentFromProp
} from 'recompose'

import React, { Component } from 'react'
import MyButton from './components/MyButton'

// PART 1

// We can create new components with some enhanced with some default props
const enhanceWithText = defaultProps({ text: 'Hello world!' })
const ButtonWithText = enhanceWithText(MyButton)

// PART 2

// For the next part we need a little component.
const MyP = () => <p>I am a p</p>

// Here we make the default value of component a `MyP` component.
// If we wanted to use a standard HTML tag, we would use a string,
// like `{ component: 'p' }`.
const enhanceWithComponent = defaultProps({ component: MyP })
// Then we set up an enhanced component to use the component property
// to choose what to render.
const DynamicComponent = enhanceWithComponent(componentFromProp('component'))

// PART 3

export default class Recompose extends Component {
  render () {
    return (
      <section>
        {/* PART 1 */}
        <ButtonWithText />
        <ButtonWithText text='Overridden!' />

        {/* PART 2 */}
        <DynamicComponent />
        <DynamicComponent component={ButtonWithText} />

        {/* PART 3 */}

      </section>
    )
  }
}
