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

const CreatePost = ({ label }) => {
  const [postContent, setPostContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/post", postContent )
    .then(res => console.log(res))
  };
  return (
    <div>
      {/* <Card style={{ width: "400px", height: "70px" }}> */}
        <form style={{margin:"50px"}} inline={true} onSubmit={submitHandler}>
          {/* <Input /> */}
          <TextField
            style={{ width: "300px" }}
            label={label}
            onChange={(e) => setPostContent(e.target.value)}
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
