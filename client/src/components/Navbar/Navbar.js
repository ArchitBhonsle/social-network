import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//material ui
import {
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  IconButton,
} from "@material-ui/core";

//icons
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";

//styles
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    var token = window.localStorage.getItem("Authentication");
    let navbar = token ? (
      <Fragment>
        <Tooltip title="Add a post" placement="bottom">
          <IconButton className={styles.button}>
            <AddCircleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Home" placement="bottom">
          <IconButton className={styles.button} component={Link} to="/">
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="About devs" placement="bottom">
          <IconButton className={styles.button} component={Link} to="/about">
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Fragment>
    ) : (
      <Fragment>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/signup" color="inherit">
          Signup
        </Button>
      </Fragment>
    );
    return (
      <AppBar>
        <Toolbar className={styles.container}>{navbar}</Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
