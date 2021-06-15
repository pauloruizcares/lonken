import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Tabs,
  Tab } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // title: {
  //   flexGrow: 1,
  // },
}))

const Navbar = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { routes } = props

  // return (<nav data-testid='Navbar'>
  //   <div>
  //     <ul>

  //     </ul>
  //   </div>
  // </nav>)

  return (<AppBar position='static' data-testid='Navbar'>
    <Toolbar>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' className={classes.title}>
          News
      </Typography>
      <Tabs>
        {routes.map((route, indexRoute) => (
          <Tab key={indexRoute} onClick={() => {
            history.push(route.to)
          }} label={route.title}>
          </Tab>))}
      </Tabs>
      <Button color='inherit'>Login</Button>
    </Toolbar>
  </AppBar>)
}

Navbar.propTypes = {
  routes: PropTypes.array,
}

Navbar.defaultProps = {
  routes: [],
}

export default Navbar
