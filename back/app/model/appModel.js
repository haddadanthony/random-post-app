const sql = require('./db.js');

const Post = function(post){
    this.post = post.post;
    this.name = post.name;
    this.created_at = new Date();
}

Post.getAllPosts = (result) => {
    sql.query("Select * from posts", (err, res) => {
        
        if(err) {
            console.log(`Error: ${err}`);
            result(err, null);
        } else {
            console.log(`Posts: ${res}`);
            result(null, res);
        }
    })
}

Post.createPost = (newPost, result) => {
    sql.query('INSERT INTO posts set ?', newPost, (err, res) => {
        if(err) {
            console.log(`Error: ${err}`);
            result(err, null);
        } else {
            console.log(`Post created with id: ${res.insertId}`);
            result(null, res.insertId);
        }
    })
}

Post.deletePost = (id, result) => {
    sql.query(`DELETE FROM posts where id = ?`, [id], (err, res) => {
        if(err) {
            console.log(`Error: ${err}`);
            result(err, null);
        } else {
            console.log(`Post deleted with id: ${id}`);
            result(null, res.insertId);
        }
    })
}

module.exports = Post;