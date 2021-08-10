const PostsController = require("../controllers/post.controller");

module.exports = app => {
  app.get("/api/post", PostsController.getAllPosts);
  app.get("/api/post/:id", PostsController.getOnePost);
  app.post("/api/post", PostsController.createPost);
  app.put("/api/post/:id", PostsController.updatePost);
  app.delete("/api/post/:id", PostsController.deletePost);
};