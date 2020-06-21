import React, { Component } from "react";
import axios from "axios";

//material ui
import { Grid } from "@material-ui/core";

//styles
import styles from "./home.module.css";

//compoents
import Post from "../../components/Post/Post";

class home extends Component {
  state = {
    posts: null,
  };

  componentDidMount() {
    var idOfOwner = "";
    axios
      .get("http://localhost:5000/task")
      .then((res) => {
        console.log(res.data);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let recentPosts = this.state.posts
      ? this.state.posts.map((post) => <Post key={post._id} post={post} />)
      : "Loading...";

    return (
      <Grid container spacing={4}>
        <Grid item sm={8} xs={12}>
          {recentPosts}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>profile</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
