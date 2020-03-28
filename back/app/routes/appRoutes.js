module.exports = function(app) {
  var postList = require("../controller/appController");

  //Posts routes
  app
    .route("/posts")
    .get(postList.list_all_posts)
    .post(postList.create_post)

  app
    .route("/posts/:id")
    .delete(postList.delete_post)
};
