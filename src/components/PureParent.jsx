// @flow

import React, { Component } from 'react';

import { PureChild, SFCChild } from './PureChild';
import type { Thing } from '../types';

type Props = {
  things: Thing[],
}

export const SFCParent = (props: Props) => {
  const { things } = props;

  console.log('render PureParent');

  return (
    <SFCChild things={things}></SFCChild>
  );
};

export class PureParent extends Component<Props> {
  render() {
    const { things } = this.props;

    console.log('render PureParent');

    return (
      <PureChild things={things}></PureChild>
    );
  }
}
