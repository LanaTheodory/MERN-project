const { Like } = require('../models/like.model');


    /////// to create a Like///////////////////

module.exports.createLike = (request, response) => {
    const { user_id, post_id } = request.body;
    Like.create({
        user_id,
        post_id

    })

.then(async function(Like){
    const like=await Like.populate('post_id').populate('user_id').execPopulate();
    return response.json(like);
  })
    //     .then(Like => response.json(Like))
        .catch(err => response.status(400).json(err))
}

//////////get all Likes//////

module.exports.getAllLikes = (request,response) => {
    Like.find({})
    .then(Likes => response.json(Likes))
    .catch(err => response.json(err))

}

///////// find one Like ///////////////////
module.exports.getOneLike = (request , response) => {
    Like.findOne({_id: request.params.id})
    .then(Like => response.json(Like))
    .catch(err => response.json(err))
}

////////update///////////////

module.exports.updateLike = (request, response) => {
    //if Like.user._id != user_id in session 
    Like.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true} )
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

/////delete/////////////
module.exports.deleteLike = (request, response) => {
    //if Like.user._id != user_id in session 
    Like.deleteOne({_id: request.params.id})
    .then(ifDeleted => response.json(ifDeleted))
    .catch(err => response.json(err))
}
