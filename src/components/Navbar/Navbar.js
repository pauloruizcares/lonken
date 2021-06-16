import React from 'react'
import PropTypes from 'prop-types'
import { AppBar,
  Toolbar,
  Typography,
  makeStyles,
  List,
  ListItem,
  Box,
  Hidden,
  IconButton,
} from '@material-ui/core'
import { useHistory } from 'react-router'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({
  containerItems: {
    display: 'flex',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    cursor: 'pointer',
    marginLeft: 5,
    marginRight: 5,
  },
  items: {
    width: 'fit-content',
    display: 'flex',
  },
  containerMenuButton: {
    width: '65%',
    textAlign: 'end',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const Navbar = (props) => {
  const { routes, onClickMenu } = props
  const classes = useStyles()
  const history = useHistory()

  return (<AppBar position='static' data-testid='Navbar'>
    <Toolbar>
      <Typography variant='h6'>
      Lonken Icon
      </Typography>
      <Hidden only='xs'>
        <Box className={classes.containerItems}>
          <List className={classes.items}>
            {routes.map((route, indexRoute) => (
              <ListItem
                className={classes.item}
                key={`item-${indexRoute}`}
                onClick={() => {
                  history.push(route.to)
                }}>
                <Typography>
                  {route.title}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Hidden>
      <Hidden only={[ 'sm', 'lg' ]}>
        <Box className={classes.containerMenuButton}>
          <IconButton onClick={onClickMenu}
            edge='end'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
        </Box>
      </Hidden>
    </Toolbar>
  </AppBar>)
}

Navbar.propTypes = {
  routes: PropTypes.array,
  onClickMenu: PropTypes.func,
}

Navbar.defaultProps = {
  routes: [],
}

export default Navbar
