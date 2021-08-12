import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/login/Header";
import CreatePost from "../components/PostComponent/CreatePost";
import Post from "../components/PostComponent/Post";

const MainPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/post")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header pageTitle="Axsos" />
      <div style={{margin:"0 auto", width:"fit-content"}}>
        <CreatePost label="what are you struggling with?"></CreatePost>
        {/* {posts.map((post , i) =>{
            
             <Post content={post.postContent} user={post.user}/> 
        } )} */}
        <Post content="Struggling with react " user="lanaTheodory" />
      </div>
    </div>
  );
};

export default MainPage;
