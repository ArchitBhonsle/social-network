import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { ProfileButton } from './ProfileButton';

const useStyles = makeStyles((theme) => ({
  root       : {
    flexGrow : 1
  },
  menuButton : {
    marginRight : theme.spacing(2)
  },
  title      : {
    flexGrow : 1
  }
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <Menu />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Social Network
        </Typography>
        {/* <Button color='inherit'>Login</Button> */}
        <ProfileButton />
      </Toolbar>
    </AppBar>
  );
};
