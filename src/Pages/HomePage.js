import React from 'react'
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material'
import CoinsListing from 'containers/CoinsListing'
import WatchList from 'containers/WatchList'
import darkTheme from 'theme'

const Homepage = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <CoinsListing />
          </Grid>
          <Grid item xs={4}>
            <WatchList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default Homepage
