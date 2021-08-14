const { Post } = require("../models/post.model");

/////// to create a Post///////////////////

module.exports.createPost = (request, response) => {
  console.log(request.body);
  const { postContent, user,room } = request.body;

  Post.create({
    postContent,
    user,
    room
  })
    .then(async function(Post){
      const post=await Post.populate('user').execPopulate();
      return response.json(post);
    })
    .catch((err) => {
      console.log(err);
      return response.status(400).json(err);
    });
};

//////////get all Posts//////

module.exports.getAllPosts = (request, response) => {
  Post.find({})
    .populate("user")
    .populate({
      path: "comments",
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: "user" },
    })
    .populate("likes")
    .then((Posts) => response.json(Posts))
    .catch((err) => response.json(err));
};

///////// find one Post ///////////////////
module.exports.getOnePost = (request, response) => {
  Post.findOne({ _id: request.params.id })
    .then((Post) => response.json(Post))
    .populate("user")
    .populate("comments")
    .catch((err) => response.json(err));
};

////////update///////////////

module.exports.updatePost = (request, response) => {
  Post.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((err) => response.json(err));
};

/////delete/////////////
module.exports.deletePost = (request, response) => {
  Post.deleteOne({ _id: request.params.id })
    .then((ifDeleted) => response.json(ifDeleted))
    .catch((err) => response.json(err));
};
