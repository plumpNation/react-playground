// @flow

import React, { PureComponent } from 'react';

import type { Thing } from '../types';

type Props = {
  things: Thing[],
}

export class PureChild extends PureComponent<Props> {
  render() {
    const { things } = this.props;

    console.log('render PureChild', things);

    return (
      <div>
        <h2>Pure components</h2>
        <ul>
          {things.map(thing => <li key={thing.id}>{thing.stuff}</li>)}
        </ul>
      </div>
    );
  }
}

export const SFCChild = (props: Props) => {
  const { things } = props;

  console.log('render PureChild', things);

  return (
    <div>
      <h2>SFC components</h2>
      <ul>
        {things.map(thing => <li key={thing.id}>{thing.stuff}</li>)}
      </ul>
    </div>
  );
};
