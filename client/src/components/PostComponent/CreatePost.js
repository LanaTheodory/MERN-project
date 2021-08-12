import { Button, Card, TextField } from "@material-ui/core";
import React ,{useState, useEffect} from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Cookies from 'js-cookie'


const CreatePost = ({ label ,  createContent}) => {
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const user =  Cookies.get("userId");
    

    createContent({content, user});
    setContent("");

  };
  return (
    <div>
      {/* <Card style={{margin:"50px"}} style={{ width: "400px", height: "70px" }}> */}
        <form style={{margin:"50px" }} style={{ width: "400px", height: "70px" }} inline={true} onSubmit={submitHandler} >
          {/* <Input /> */}
          <TextField
            style={{ width: "300px" }}
            label={label}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button type="submit">
            <PostAddIcon></PostAddIcon>
          </Button>
        </form>
      {/* </Card> */}
    </div>
  );
};

export default CreatePost;
