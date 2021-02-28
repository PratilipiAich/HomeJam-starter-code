import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, Grid, CardContent,Typography} from '@material-ui/core';
import user1 from "../../assets/users/user1.jpeg";
import user2 from "../../assets/users/user2.jpg";
import user3 from "../../assets/users/user3.jpg";
import {
    IconFlagDE,
    IconFlagUS
} from 'material-ui-flags';

import IconButton from '@material-ui/core/IconButton';
 

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    backgroundColor: "#090127",
    color: "#fff",
    boxShadow: "10px -10px 10px -0px #019BA1",
    borderRadius: "10px",
    border: "3px solid #F5CB0D",
    height: "flex"
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundPosition: "center center",
  },
  review: {
    color: "#fff",
  },
}));

export default function ReviewCard() {
  const classes = useStyles();

  return (
      <div>
           <Grid container spacing={24}>
  <Grid item md={4}>
    <Card className={classes.root}>
      <CardHeader
      subheaderTypographyProps={{variant:'subtitle2', color: "#F5CB0D" }}
        avatar={<img className={classes.avatar} src={user1} alt=" user 1" />}
        title="Hellen Jummy"
        subheader="PALO ALTO, CA"
      />
      <CardContent>
      <IconButton><IconFlagUS /></IconButton>
        <Typography variant="body2" className={classes.review} component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item md={4}>
    <Card className={classes.root}>
      <CardHeader
      subheaderTypographyProps={{variant:'subtitle2', color: "#F5CB0D" }}
        avatar={<img className={classes.avatar} src={user2} alt="user 2" />}
        title="Isaac Oluwatemilorun"
        subheader="PALO ALTO, CA"
      />
      <CardContent>
      <IconButton><IconFlagDE /></IconButton>
        <Typography variant="body2" className={classes.review} component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item md={4}>
    <Card className={classes.root}>
      <CardHeader
      subheaderTypographyProps={{variant:'subtitle2', color: "#F5CB0D" }}
        avatar={<img className={classes.avatar} src={user3} alt="user 3" />}
        title="Hellen Jummy"
        subheader="PALO ALTO, CA"
      />
      <CardContent>
      <IconButton><IconFlagUS /></IconButton>
        <Typography variant="body2" className={classes.review} component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </div>
  );
}
