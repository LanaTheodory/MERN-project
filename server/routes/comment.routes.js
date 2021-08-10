const CommentController= require("../controllers/comment.controller");

module.exports = app => {
  app.get("/api/comment", CommentController.getAllComments);
  app.get("/api/comment/:id", CommentController.getOneComment);
  app.post("/api/comment", CommentController.createComment);
  app.put("/api/comment/:id", CommentController.updateComment);
  app.delete("/api/comment/:id", CommentController.deleteComment);
};

