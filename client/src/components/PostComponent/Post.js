import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import Comment from "../CommentComponent/Comment";
import CreatePost from "./CreatePost";
import axios from "axios";
import Cookies from "js-cookie";
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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

const Post = ({ postId, content, comments, likes, user,commentAddChange, createdAt, deletedPost }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [comment, setComment] = useState(comments);
  const [liikes, setLiikes] = useState(likes);
  //const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/comment").then((res) => {
  //     setComment(res.data);
  //   // setLoaded(true);
  //   });
  // }, []);

  const createNewComment = (newComment) => {
    const newComment1 = {
      commentContent: newComment.content,
      user: newComment.user,
      post: postId,
    };
    

    axios.post("http://localhost:8000/api/comment", newComment1).then((res) => {
      setComment([...comment, res.data]);
      
      const updatePost = {
        comments: [...comment, res.data],
      };
      axios
        .put("http://localhost:8000/api/post/" + postId, updatePost)
        .then((res) => {
          const updateUser = {
            comments: [...comment, res.data],
          };

          const userId = Cookies.get("userId")
          axios
            .put("http://localhost:8000/api/user/" + userId, updateUser)
            .then((res) => console.log(res.data));
        });
    });
  };

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
commentAddChange()

  // const handelLikeClick = () =>{
  //   const newLike={
  //     user_id : Cookies.get("userId"),
  //     post_id : postId
  //   }

  //   addLike(newLike)
  // }

  const addLike = () => {
    const newLike = {
      user_id: Cookies.get("userId"),
      post_id: postId,
    };
    axios.post("http://localhost:8000/api/like", newLike).then((res) => {
      setLiikes([...liikes, res.data]);
      const updatePost1 = {
        likes: [...likes, res.data],
      };
      axios.put("http://localhost:8000/api/post/" + postId, updatePost1);

      //  .then(res=> lastUpdatedPost(res.data))
    });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deletePost = () => {
    axios.delete("http://localhost:8000/api/post/" + postId)
    .then(res => deletedPost(res.data))
  }

  return (
    <>
      {/* {loaded && ( */}
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
            title={user.name}
            subheader={formatDate(createdAt)}
       
            
          
          />

          {/* delete button is here!!!!!!!!!!! */}
               <IconButton onClick={deletePost} aria-label="">
            <DeleteIcon /> 
          </IconButton>

       
          {/* delete button endsss here!!!!!!!!!!! */}

          <CardContent>
            <Typography variant="h4" color="textSecondary" component="p">
              {content}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            {liikes.length < 1 ? (
              <IconButton onClick={addLike} aria-label="add to favorites">
               <FavoriteBorderIcon/> 
              </IconButton>
            ) : (
              <IconButton onClick={addLike} aria-label="add to favorites">
                <FavoriteIcon /> <h6>{liikes.length}</h6>
              </IconButton>
            )}

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
              {comment.length > 0 ? (
                comment.map((comments, i) => {
                  {console.log("comments:::::::" , comments )}

                  return (
                   
                    <div>
                      <Comment
                        key={i}
                        user={comments.user}
                        content={comments.commentContent}
                        createdAt={comments.createdAt}
                     
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
      {/* )} */}
    </>
  );
};

export default Post;
