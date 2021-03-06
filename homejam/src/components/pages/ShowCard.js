import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import benny from "../../assets/artists/benny-dayal.jpg";
import andrea from "../../assets/artists/andrea.jpg";
import shilpa from "../../assets/artists/shilpa-rao.jpg";
import vijay from "../../assets/artists/vijay.jpg";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";

const useStyles = makeStyles({
  container: {
    overflow: "auto",
    whiteSpace: "nowrap",
  },
  root: {
    width: 245,
    maxWidth: 300,
    backgroundColor: "#04013E",
    color: "#fff",
    borderTop: "8px solid #230186",
    borderRight: "8px solid #230186",
    borderRadius: "10px",
    display: "inline-block",
    marginRight: "20px",
  },
  media: {
    height: 200,
  },
  tag: {
    background: "#F5CB0D",
    fontSize: "9pt",
    fontWeight: "600",
    padding: "1.5%",
    width: "fit-content",
    borderRadius: "1px",
    color: "#A15302",
    marginBottom: "5%",
  },
  text: {
    fontFamily: "Georgia, Times, 'Times New Roman', serif",
  },
  btn: {
    color: "blue",
    textTransform: "none",
    fontSize: "11pt",
    marginRight: "16%",
  },
  ticket: {
    color: "#e899dc",
    marginLeft: "10%",
    borderLeft: "2px solid #474747",
    borderRadius: 0,
    "&:hover": {
      color: "#fff",
    },
  },
});

export default function ShowCard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={benny}
            title="Benny Dayal"
          />
          <CardContent>
            <Typography className={classes.tag}>Folk</Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              Benny Dayal
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.btn}>
            More Info <ArrowForwardIcon />
          </Button>
          <Button size="small" className={classes.ticket}>
            <ConfirmationNumberOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={vijay}
            title="Vijay Yesudas"
          />
          <CardContent>
            <Typography className={classes.tag}>Bolywood</Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              Vijay Yesudas
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.btn}>
            More Info <ArrowForwardIcon />
          </Button>
          <Button size="small" className={classes.ticket}>
            <ConfirmationNumberOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={andrea}
            title="Andrea Jeremiah"
          />
          <CardContent>
            <Typography className={classes.tag}>Folk</Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              Andrea Jeremiah
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.btn}>
            More Info <ArrowForwardIcon />
          </Button>
          <Button size="small" className={classes.ticket}>
            <ConfirmationNumberOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={shilpa}
            title="Shilpa Rao"
          />
          <CardContent>
            <Typography className={classes.tag}>Folk</Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.text}
            >
              Shilpa Rao
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.btn}>
            More Info <ArrowForwardIcon />
          </Button>
          <Button size="small" className={classes.ticket}>
            <ConfirmationNumberOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
