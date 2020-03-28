const Post = require("../model/appModel");

exports.list_all_posts = (req, res) => {
  Post.getAllPosts((err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.send(post);
    }
  });
};

exports.create_post = (req, res) => {
  let newPost = new Post(req.body);
  console.log(req.body);

  if (!newPost.name || !newPost.post) {
    res
      .status(400)
      .send({ error: true, message: "Please provide a name/post." });
  } else {

    Post.createPost(newPost, (err, post) => {
      if (err) {
        res.send(err);
      } else {
        res.json(post);
      }
    });
  }
};

exports.delete_post = (req, res) => {
    let id = req.params.id;
    console.log(id);
    Post.deletePost(id, (err, post) => {
        if(err) res.send(err);
        res.json(post);
    })
}
