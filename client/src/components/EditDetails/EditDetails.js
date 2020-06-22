import React, { Component, Fragment } from "react";
import axios from "axios";

//styles
import styles from "./EditDetails.module.css";
import {
  Tooltip,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
class EditDetails extends Component {
  state = {
    userEdit: {},
  };

  componentDidMount() {
    var token = window.localStorage.getItem("Authentication");
    console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const bodyParameters = {
      key: "value",
    };

    axios
      .patch("http://localhost:5000/users/me", config, bodyParameters)
      .then((res) => {
        console.log(res.data);
        this.setState({
          userEdit: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <Tooltip title="Edit details">
          <IconButton className={styles.button}>
            <Edit color="primary" />
          </IconButton>
        </Tooltip>
      </Fragment>
    );
  }
}

export default EditDetails;
