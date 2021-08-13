const { Comment } = require("../models/comment.model");

/////// to create a Comment///////////////////

module.exports.createComment = (request, response) => {
  const { commentContent, user, post } = request.body;
  Comment.create({
    commentContent,
    user,
    post,
  })

  // .then(async function(Comment){
  //   const comment=await Comment.populate('user').execPopulate();
  //   return response.json(comment);
  // })
    .then((Comment) => response.json(Comment))
    .catch((err) => response.status(400).json(err));
};

//////////get all Comments//////

module.exports.getAllComments = (request, response) => {
  Comment.find({})
    .populate("user")
    .then((Comments) => response.json(Comments))
    .catch((err) => response.json(err));
};

///////// find one Comment ///////////////////
module.exports.getOneComment = (request, response) => {
  Comment.findOne({ _id: request.params.id })
    .populate("user")
    .then((Comment) => response.json(Comment))
    .catch((err) => response.json(err));
};

////////update///////////////

module.exports.updateComment = (request, response) => {
  //if comment.user._id != user_id in session
  Comment.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((err) => response.json(err));
};

/////delete/////////////
module.exports.deleteComment = (request, response) => {
  //if comment.user._id != user_id in session
  Comment.deleteOne({ _id: request.params.id })
    .then((ifDeleted) => response.json(ifDeleted))
    .catch((err) => response.json(err));
};
