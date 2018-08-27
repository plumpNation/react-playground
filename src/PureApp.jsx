// @flow


import React, { PureComponent } from 'react'

import { PureParent, SFCParent } from './components/PureParent';
import type { Thing } from './types';

type AppProps = {};

type AppState = {
  title: string,
  things: Thing[],
};

class App extends PureComponent<AppProps, AppState> {
  state = {
    title: 'Parent start',
    things: [
      {
        stuff: 'I am a  thing',
        id: 'abc'
      },
    ],
  };

  componentDidMount() {
    const { things, title } = this.state;

    console.log('component did mount');

    setTimeout(() => {
      // mutate the things
      things.push({
        stuff: 'I am more things',
        id: 'def',
      });

      this.setState({ things, title: 'Parent updated' });
    }, 500);
  }

  render () {
    const { things, title } = this.state;

    console.log('render PureApp');

    return (
      <div className='App'>
        <h1>{title}</h1>
        <PureParent things={things} />
        <SFCParent things={things} />
      </div>
    )
  }
}

export default App
