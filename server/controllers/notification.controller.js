const { Notification } = require('../models/notification.model');


    /////// to create a Notification///////////////////

module.exports.createNotification = (request, response) => {
    const { sender, receiver } = request.body;

    Notification.create({
        sender,
        receiver,

        message: "you have received a new notification on your post",
     
     
    })
        .then(Notification => {response.json(Notification)})
        .catch(err => response.status(400).json(err))
}

//////////get all Notifications//////

module.exports.getAllNotifications = (request,response) => {
    Notification.find({})
    .then(Notifications => response.json(Notifications))
    .catch(err => response.json(err))

}

///////// find one Notification ///////////////////
module.exports.getOneNotification = (request , response) => {
    Notification.findOne({_id: request.params.id})
    .then(Notification => response.json(Notification))
    .catch(err => response.json(err))
}

////////update///////////////

module.exports.updateNotification = (request, response) => {
    //if Notification.user._id != user_id in session 
    Notification.findOneAndUpdate({_id: request.params.id} ,request.body, {new:true , runValidators: true} )
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

/////delete/////////////
module.exports.deleteNotification = (request, response) => {
    //if Notification.user._id != user_id in session 
    Notification.deleteOne({_id: request.params.id})
    .then(ifDeleted => response.json(ifDeleted))
    .catch(err => response.json(err))
}
