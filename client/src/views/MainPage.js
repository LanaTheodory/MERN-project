import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CreatePost from '../components/PostComponent/CreatePost';
import Post from '../components/PostComponent/Post'

const MainPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
     axios.get("http://localhost:8000/api/post")
     .then(res => {setPosts(res.data) ;
    console.log(res.data)
    })
     .catch(err => console.log(err))

    }, [])
    return (
        <div>
      
            <CreatePost label="what are you struggling with?"></CreatePost>
             {/* {posts.map((post , i) =>{
               
              <div key={i}> <Post key={i} content={post} user={post.user}/> </div>
        } )} */}
           <Post content="my first possstttttt" user="lanaTheodory"/>
           
        </div>
    )
}

export default MainPage
