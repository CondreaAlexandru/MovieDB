import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'

import { Link } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings'
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          style={{
            flexGrow: 1,
          }}
          variant="h6">
          <Link to="/"  style={{
            textDecoration: 'none',
            color:'white'
          }}>Movie DB</Link>
        </Typography>
        <AccountBoxIcon/>{props.user && <p>{props.user.userName}</p>}
        {props.user && (
          <span>
            <IconButton color="inherit">
              <Link to="/settings">
                <SettingsIcon />
              </Link>
            </IconButton>
            <Button onClick={props.onLogout} color="inherit">
              Logout
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
