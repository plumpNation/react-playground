// @flow

/**
 * This example shows how you can accept a prop and then run that prop
 * back into the transcluded children.
 *
 * Interesting article arguing that this technique is an anti-pattern:
 * @see https://americanexpress.io/faccs-are-an-antipattern/
 */

import React from 'react'
import type { Node } from 'react'

type Props = {
  children: Function,
  name: string
}

export default ({ children, name }: Props) => {
  const renderedChildren: Node = children({ name })

  return (
    <div className='function-as-children'>
      {renderedChildren}
    </div>
  )
}
