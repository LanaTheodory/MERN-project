import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/login/Header";
import CreatePost from "../components/PostComponent/CreatePost";
import Post from "../components/PostComponent/Post";

const MainPage = () => {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
     axios.get("http://localhost:8000/api/post")
     .then(res => {
         console.log(res.data);
         setPosts(res.data);
     })
     .catch(err => console.log(err))

    }, [])


    const  createNewPost = (newPost) =>{
        const newPost1 = {
            user : newPost.user,
            postContent: newPost.content
        }
   axios.post("http://localhost:8000/api/post", newPost1 )
   //spread!!!!!
   .then(res => {
       setPosts([...posts , res.data]);
        console.log(newPost);
    }
       );
    
    }

    return (
        <div>
            
             <Header pageTitle="Axsos" /> 
             <div style={{margin:"0 auto", width:"fit-content"}}>
            <CreatePost  createContent={ createNewPost} label="what are you struggling with?"></CreatePost>

                   <div style={{margin:"0 auto", width:"fit-content"}}>{posts.length > 0 ? posts.map((post , i) =>{
                       
            return( 
                
            <div key={i}>
                <Post  style={{margin:"50px"}} likes={post.likes} comments={post.comments} postId={post._id} content={post.postContent} user={post.user.name} createdAt={post.createdAt}/> 
            </div>
        )
     } ) : <p>loading......</p>} 
     </div>
  
          </div>
        </div>
    )
}

export default MainPage;
