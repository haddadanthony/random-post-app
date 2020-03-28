import React from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./Components/Header/Header";
import AddPost from "./Components/Post/AddPost/AddPost";
import PostView from "./Components/Post/PostView/PostView";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postInput: "Your post here...",
      nameInput: ""
    };
  }

  changeHandler = e => {
    let target = e.target.name;
    target === "post"
      ? this.setState({ postInput: e.target.value })
      : this.setState({ nameInput: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    let newPost = new URLSearchParams();
    newPost.append('name', this.state.nameInput);
    newPost.append('post', this.state.postInput);
    const response = await fetch('http://localhost:8000/posts', {
      method: 'POST',
      body: newPost,
    })
    let posts = [...this.state.posts];
    let post = {};
    post.name = this.state.nameInput;
    post.post = this.state.postInput;
    posts = [post, ...posts];
    this.setState({
      postInput: "",
      nameInput: "",
      posts
    });
  }

  componentDidMount = async () => {
    const result = await fetch(`http://localhost:8000/posts`);
    const posts = await result.json();
    this.setState({ posts });
  };

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Header />
          <AddPost
            change={this.changeHandler}
            postValue={this.state.postInput}
            nameValue={this.state.nameInput}
            submit={this.submitHandler}
          />
          <PostView posts={this.state.posts} />
        </Wrapper>
      </div>
    );
  }
}

export default App;
