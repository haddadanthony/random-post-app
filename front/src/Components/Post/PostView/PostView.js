import React from "react";
import classes from "./PostView.module.css";
import PostList from "../PostList";

const PostView = props => {
  return (
    <div className={classes.wrapper}>
      <PostList posts={props.posts} />
    </div>
  );
};

export default PostView;
