import axios from "axios";
import { use } from "passport";
import React, { useState, useEffect } from "react";
import Header from "../components/login/Header";
import CreatePost from "../components/PostComponent/CreatePost";
import Post from "../components/PostComponent/Post";
import Cookies from "js-cookie";
import io from 'socket.io-client';


const MainPage = (props) => {
  
  const [socket] = useState(() => io(':8000'));
  const [room, setRoom] = useState({});
  const [posts, setPosts] = useState([]);
  const [loaded, setloaded] = useState(true);
  // const [comments, setComments] = useState([]);
  const [commentChange, setcommentChange] = useState(false)

  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/room/" + (props.id))
      .then((res) => {
        console.log(
          "---------------------- Posts ------------------------------"
        );
        console.log(res.data);
        console.log(
          "---------------------- Posts ------------------------------"
        );
        setRoom(res.data);
       setPosts(res.data.posts)


        // setComments(res.data.posts.filter((post) => {
        //   return  post.comments 
        // }))
        
      })
      .catch((err) => console.log(err));
    }, [loaded]);

    
 const clickedOnRoom = () =>{
  setloaded(!loaded)
 }
 
  //  console.log(comments , "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
const deletedPost = (postId) =>{
  const newPosts = posts.filter(post => post._id !== postId )
  setPosts(newPosts)
  setloaded(false)
}

const commentAddChange =() => {
  setcommentChange(true)
}
  const createNewPost = (newPost) => {
    const newPost1 = {
      user: newPost.user,
      postContent: newPost.content,
      room: room._id
    };
    axios.post("http://localhost:8000/api/post", newPost1).then((res) => {
      
      setPosts([...posts, res.data]);
      console.log(newPost);
      console.log(posts);
      const updatedRoom = {
          posts : [...posts , res.data]
      }
      axios.put("http://localhost:8000/api/room/" + (room._id), updatedRoom)
      .then(res => {
      console.log(
        "------------------------------Roomupdate---------"
      );
      console.log(res.data); 

      const updatedUser ={
          posts : [...posts , res.data]
      }
      const userId = Cookies.get("userId")
      axios.put("http://localhost:8000/api/user/" + userId, updatedUser)
      .then(res => console.log(res.data))

      }
      )


    });
  };

  return (
    <div>
      <Header clickedOnRoom={clickedOnRoom} pageTitle={room.roomName} />
      <div style={{ margin: "0 auto", width: "fit-content" }}>
        <CreatePost
          createContent={createNewPost}
          label="what are you struggling with?"
        ></CreatePost>

        <div style={{ margin: "0 auto", width: "fit-content" }}>
          {posts.length > 0 ? (
            posts.map((post, i) => {
              return (
                <div key={i}>
                  <Post
                    style={{ margin: "50px" }}
                    likes={post.likes}
                    comments={post.comments}
                    postId={post._id}
                    content={post.postContent}
                    user={post.user}
                    createdAt={post.createdAt}
                    deletedPost={deletedPost}
                    commentAddChange={commentAddChange}
                  />
                </div>
              );
            })
          ) : (
            <p>loading struggles...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
