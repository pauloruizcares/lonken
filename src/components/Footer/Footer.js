import React from 'react'
// import PropTypes from 'prop-types'
import { AppBar,
  Toolbar,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (<AppBar
    position='fixed'
    data-testid='Footer'
    color='primary'
    className={classes.appBar}>
    <Toolbar>
      <div className={classes.grow}>
        Footer
      </div>
    </Toolbar>
  </AppBar>)
}

export default Footer
