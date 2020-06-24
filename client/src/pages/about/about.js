import React, { Component } from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./about.module.css";

//material ui
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@material-ui/core";

class about extends Component {
  render() {
    return (
      <Grid container spacing={4}>
        <Grid item sm={4} xs={12}>
          <Card className={styles.card}>
            <CardActionArea>
              <CardMedia
                style={{ height: 0, paddingTop: "56%" }}
                image="/githubicon.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dion Pinto
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Github Repository
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/dpirad007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className={styles.card}>
            <CardActionArea>
              <CardMedia
                style={{ height: 0, paddingTop: "56%" }}
                image="/githubicon.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Archit Bhonsale
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Github Repository
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/ArchitBhonsle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className={styles.card}>
            <CardActionArea>
              <CardMedia
                style={{ height: 0, paddingTop: "56%" }}
                image="/githubicon.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ved Patil
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Github Repository
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/vedpatil611"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className={styles.card1}>
            <CardActionArea>
              <CardMedia
                style={{ height: 0, paddingTop: "56%" }}
                image="/githubicon.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Omkar Bhabal
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Github Repository
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/bhabalomkar421"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className={styles.card1}>
            <CardActionArea>
              <CardMedia
                style={{ height: 0, paddingTop: "56%" }}
                image="/githubicon.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Arpit Bhat
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Github Repository
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <a
                  href="https://github.com/arpitbhat48"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default about;