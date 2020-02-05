import React, { Fragment } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  twitter: {
  },
  facebook: {
  },
  instagram: {
  }
}))

export default props => {
  const classes = useStyles()
  return <Fragment>
    <TwitterIcon className={ classes.twitter } />
    <FacebookIcon className={ classes.facebook } />
    <InstagramIcon className={ classes.instagram } />
  </Fragment>
}
