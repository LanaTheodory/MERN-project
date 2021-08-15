import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

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
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Comment = ({ content, user, createdAt }) => {
  const classes = useStyles();
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

  return (
    <div>
     <div> {
         console.log(user , "aaaaaaaaaaaaaaaaaaaaa")
        
      }</div>
      <div className={classes.root}>
        <CardHeader
          avatar={
            <img
              src="	https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
              height="50px"
              width="50px"
            ></img>
          }
          title={user.name}
          subheader={formatDate(createdAt)}
        />

        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </div>
    </div>
  );
};

export default Comment;
