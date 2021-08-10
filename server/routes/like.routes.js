const likeControllers = require("../controllers/like.contoller");

module.exports = app => {
  app.get("/api/like", likeControllers.getAllLikes);
  app.get("/api/like/:id", likeControllers.getOneLike);
  app.post("/api/like", likeControllers.createLike);
  app.put("/api/like/:id", likeControllers.updateLike);
  app.delete("/api/like/:id", likeControllers.deleteLike);
};