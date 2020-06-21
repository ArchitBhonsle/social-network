import React, { Component } from "react";
import axios from "axios";

//image
import icon from "../../images/icon.png";

//material ui
import { Grid, Typography, TextField, Button } from "@material-ui/core";

//styles
import styles from "./login.module.css";

class login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/users/login", userData)
      .then((res) => {
        //console.log(res.data);
        localStorage.setItem("auth_token", res.data.token);
        this.setState({
          loading: false,
        });

        //this.props.history.push("/"); //jump to homepage
        window.location = "/";
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        });
        //console.log(err.response.data);
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { loading, errors } = this.state;

    return (
      <Grid container className={styles.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={icon} alt="paperplane" className={styles.icon} />
          <Typography variant="h2" className={styles.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              className={styles.textField}
              helperText={errors.error}
              error={errors.error ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              className={styles.textField}
              helperText={errors.error}
              error={errors.error ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

export default login;