import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  Typography,
} from "@material-ui/core";
import user1 from "../../assets/users/user1.jpeg";
import user2 from "../../assets/users/user2.jpg";
import user3 from "../../assets/users/user3.jpg";
import { IconFlagDE, IconFlagUS } from "material-ui-flags";

import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 370,
    backgroundColor: "#090127",
    color: "#fff",
    boxShadow: "8px -8px 8px -0px #019BA1",
    borderRadius: "10px",
    border: "3px solid #F5CB0D",
    height: 240,
    marginLeft: "5%",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundPosition: "center center",
  },
  review: {
    color: "#fff",
    marginTop: "2%",
  },
  country: {
    color: "#F5CB0D",
    display: "inline",
  },
}));

export default function ReviewCard() {
  const classes = useStyles();

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Grid container spacing={25}>
              <Grid item md={3.5}>
                <Card className={classes.root}>
                  <CardHeader
                    subheaderTypographyProps={{
                      variant: "subtitle2",
                      color: "#F5CB0D",
                    }}
                    avatar={
                      <img
                        className={classes.avatar}
                        src={user1}
                        alt=" user 1"
                      />
                    }
                    title="Hellen Jummy"
                  />
                  <CardContent>
                    <IconButton>
                      <IconFlagUS />
                    </IconButton>
                    <Typography className={classes.country}>
                      PALO ALTO, CA
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.review}
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3.5}>
                <Card className={classes.root}>
                  <CardHeader
                    subheaderTypographyProps={{
                      variant: "subtitle2",
                      color: "#F5CB0D",
                    }}
                    avatar={
                      <img
                        className={classes.avatar}
                        src={user2}
                        alt="user 2"
                      />
                    }
                    title="Isaac Oluwatemilorun"
                  />
                  <CardContent>
                    <IconButton>
                      <IconFlagDE />
                    </IconButton>
                    <Typography className={classes.country}>
                      PALO ALTO, CA
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.review}
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3.5}>
                <Card className={classes.root}>
                  <CardHeader
                    subheaderTypographyProps={{
                      variant: "subtitle2",
                      color: "#F5CB0D",
                    }}
                    avatar={
                      <img
                        className={classes.avatar}
                        src={user3}
                        alt="user 3"
                      />
                    }
                    title="Hellen Jummy"
                  />
                  <CardContent>
                    <IconButton>
                      <IconFlagUS />
                    </IconButton>
                    <Typography className={classes.country}>
                      PALO ALTO, CA
                    </Typography>
                    <Typography
                      variant="body2"
                      className={classes.review}
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div className="carousel-item">
            <Card className={classes.root}>
              <CardHeader
                subheaderTypographyProps={{
                  variant: "subtitle2",
                  color: "#F5CB0D",
                }}
                avatar={
                  <img className={classes.avatar} src={user3} alt="user 3" />
                }
                title="Hellen Jummy"
              />
              <CardContent>
                <IconButton>
                  <IconFlagUS />
                </IconButton>
                <Typography className={classes.country}>
                  PALO ALTO, CA
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.review}
                  component="p"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ marginRight: "90%" }}
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ marginLeft: "20%" }}
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
