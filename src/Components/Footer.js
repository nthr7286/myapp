import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PlaceIcon from '@material-ui/icons/Place'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  }
}))

export default props => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return <AppBar 
      position="fixed" 
      color="inherit" 
      className={ classes.appBar }
    >
      <Tabs 
        value={value} 
        onChange={handleChange} 
        variant="fullWidth" 
        indicatorColor="primary" 
        textColor="primary" 
        aria-label="icon tabs example" 
      >
        <Tab
          icon={ <HomeIcon /> }
          aria-label="home"
        />
        <Tab
          icon={ <FavoriteIcon /> }
          aria-label="favorite"
        />
        <Tab
          icon={ <PlaceIcon /> }
          aria-label="place" />
        </Tabs>
    </AppBar>
}
