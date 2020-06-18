import React, { Component } from "react";
import { Link } from "react-router-dom";

//material ui
import { AppBar, Toolbar, Button } from "@material-ui/core";

//styles
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className={styles.container}>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
