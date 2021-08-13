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
import CommentIcon from "@material-ui/icons/Comment";
import Comment from "../CommentComponent/Comment";
import CreatePost from "./CreatePost";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
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

const Post = ({ postId, content, comments, likes, user, createdAt }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [changed, setChanged] = useState(false);
  const [comment, setComment] = useState([]);

  const createNewComment = (newComment) => {
    const newComment1 = {
      commentContent: newComment.content,
      user: newComment.user,
      post: postId,
    };

    axios.post("http://localhost:8000/api/comment", newComment1).then((res) => {
      setComment(res.data);
      const updatePost = {
        comments: [...comments, res.data._id],
      };
      axios
        .put("http://localhost:8000/api/post/" + postId, updatePost)
        .then((res) => {
          console.log(res.data);
          console.log("1111111111111111111111111111");

          const updateUser = {
            comments: res.data._id,
          };
          axios
            .put(
              "http://localhost:8000/api/user/" + newComment.user,
              updateUser
            )
            .then((res) => console.log(res.data));
        });
    });
  };

  const commentsArr = [comments];
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div>
        <Card className={classes.root}>
          <CardHeader
            avatar={
             
              <img
                src="	https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"
                height="50px"
                width="50px"
              ></img>
            }
    
            title={user}
            subheader={createdAt}
          />
      
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              {/* <ExpandMoreIcon /> */}
              <CommentIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>comments:</Typography>
              {/* map user comments here! */}
              {comments.length > 0 ? (
                comments.map((com, i) => {
                  return (
                    <div>
                      <Comment
                        key={i}
                        user={com.user.name}
                        content={com.commentContent}
                        createdAt={com.createdAt}
                      ></Comment>
                    </div>
                  );
                })
              ) : (
                <p>no comments</p>
              )}
              {/* <Comment content="first comment" user="lanaaaa" createdAt="11-1-1999"></Comment> */}
              <CreatePost
                createContent={createNewComment}
                label="comment here ....."
              ></CreatePost>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
};

export default Post;
