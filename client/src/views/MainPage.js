import axios from "axios";
import { use } from "passport";
import React, { useState, useEffect } from "react";
import Header from "../components/login/Header";
import CreatePost from "../components/PostComponent/CreatePost";
import Post from "../components/PostComponent/Post";

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  //  const [postLikes, setPostLikes] = useState([])
  // const [liikes, setLiikes] = useState([])
  // const [lastPost, setLastPost] = useState({})


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/post")
      .then((res) => {
        console.log(
          "---------------------- Posts ------------------------------"
        );
        console.log(res.data);
        console.log(
          "---------------------- Posts ------------------------------"
        );
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


//  const lastUpdatedPost = (postnew) => {
//       setLastPost(postnew)
//  }
  

  // const changeLikesNum = (newLikes) =>  {
  //   setPostLikes(newLikes)
  // }

//   const addLike = (newLike) =>{
   
//   axios.post("http://localhost:8000/api/like" , newLike)
//   .then(res => {setLiikes([...liikes , res.data]);

//     console.log("lllllllllllllllllllllllllll"  )

//     const updatePost1 = {
//            likes : [res.data._id]
//     }
//     axios
//     .put("http://localhost:8000/api/post/" + newLike.post_id , updatePost1)
  
//   })
// }

  const createNewPost = (newPost) => {
    const newPost1 = {
      user: newPost.user,
      postContent: newPost.content,
    };
    axios.post("http://localhost:8000/api/post", newPost1).then((res) => {
      
      setPosts([...posts, res.data]);
      console.log(newPost);
    });
  };

  return (
    <div>
      <Header pageTitle="Axsos" />
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
                    user={post.user.name}
                    createdAt={post.createdAt}
                    // postLikes={postLikes}
                    // addLike ={addLike}
                    //changeLikesNum={changeLikesNum}
                    // lastUpdatedPost={lastUpdatedPost}
                  />
                </div>
              );
            })
          ) : (
            <p>loading......</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
