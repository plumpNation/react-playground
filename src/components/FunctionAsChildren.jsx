// @flow

/**
 * This example shows how you can accept a prop and then run that prop
 * back into the transcluded children
 */

import React from 'react'

type Props = {
  children: Function
}

export default (props: Props) => {
  return (
    <div className='function-as-children'>
      {props.children({
        ...props
      })}
    </div>
  )
}
