import React from "react";
import classes from "./PostView/PostView.module.css";
import dateFormat from 'dateformat';

const PostList = props => {
  return (
    <>
      {props.posts.map((post, index) => (
        <section key={index}>
          <h3 className={classes.name}>{post.name}</h3>
          <p className={classes.post}>{post.post}</p>
          <cite className={classes.createdAt}>{dateFormat(post.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</cite>
        </section>
      ))}
    </>
  );
};

export default PostList;
