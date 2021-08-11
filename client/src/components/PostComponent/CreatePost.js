import { Button, Card, TextField } from "@material-ui/core";
import React from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const CreatePost = ({ label }) => {
  return (
    <div>
      <Card style={{width: "400px" , height: "70px"}}>
        <form inline={true}>
          {/* <Input /> */}
          <TextField style={{width:"300px"}} label={label}  />
          <Button type="submit">
            <PostAddIcon></PostAddIcon>
          </Button>
        </form>
        
      </Card>
    </div>
  );
};

export default CreatePost;
