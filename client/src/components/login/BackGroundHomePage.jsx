import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    justifyContent: "space between",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [rooms, setRooms] = useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.log(err));
  }, []);

  return rooms.map((room, idx) => {
    return (
      <div style={{ display: "flex" }}>
        <Card
          style={{
            backgroundImage: "linear-gradient(to right, #5fc3e4,#e55d87)",
            display: "inherit",
          }}
          key={idx}
          className={classes.root}
          style={{ border: "black" }}
        >
          <CardHeader
            style={{
              backgroundImage: "linear-gradient(to right, #5fc3e4,#e55d87)",
            }}
            action={
              <IconButton
                aria-label="settings"
                style={{
                  backgroundImage: "linear-gradient(to right, #5fc3e4,#e55d87)",
                }}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={room.roomName}
            subheader={room.createdAt}
          />

          <CardActions
            disableSpacing
            style={{
              backgroundImage: "linear-gradient(to right, #5fc3e4,#e55d87)",
            }}
          >
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
            ></IconButton>
          </CardActions>
        </Card>
      </div>
    );
  });
}
