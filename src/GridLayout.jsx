import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

type GridProps = {}

export default class GridLayout extends Component<GridProps> {
  render () {
    return (
      <div>
        <Grid container direction={'row'} alignItems={'center'} spacing={24}>
          <Grid item xs={1} md={2}>
            <Paper>Big Balls</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>Balls</Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
