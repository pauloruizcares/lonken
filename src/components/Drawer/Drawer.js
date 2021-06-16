import React from 'react'
import DrawerMaterial from '@material-ui/core/Drawer'
import PropTypes from 'prop-types'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))


const Drawer = (props) => {
  const { open, toggleDrawerHandler, routes } = props
  const classes = useStyles()

  const sideList = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawerHandler}
      onKeyDown={toggleDrawerHandler}
    >
      <List>
        {routes.map((route, index) => (
          <ListItem button key={route.title}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={route.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <DrawerMaterial
      test-dataid='Drawer'
      open={open}
      onClose={toggleDrawerHandler}>
      {sideList('left')}
    </DrawerMaterial>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool,
  routes: PropTypes.array,
  toggleDrawerHandler: PropTypes.func,
}


export default Drawer
