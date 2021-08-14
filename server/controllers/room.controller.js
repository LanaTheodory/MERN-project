const { Room } = require('../models/room.model');

////// Create a room 


module.exports.createRoom = (req, res) => {
    const { roomName, user } = req.body;
    Room.create({
        roomName,
        user
    })

    .then(async function(Room) {
            const room = await Room.populate('posts').populate('user').execPopulate();
            return response.json(room);
        })
        .catch(err => res.status(400).json(err))
}

////// Get all rooms

module.exports.getAllRooms = (req, res) => {
    Room.find({}).populate({
        path: "posts",
       
        populate: { path: "user" },
      }).populate("user")
        .then(room => res.json(room))
        .catch(err => err.json(err))
}



////// find one room
module.exports.getOneRoom = (req, res) => {
    Room.findOne({ _id: req.params.id }).populate({
        path: "posts",
       
        populate: { path: "user" },
      }).populate("user")
        .then(room => res.json(room))
        .catch(err => res.json(err))
}

////// delete room
module.exports.deleteRoom = (req, res) => {
    Room.deleteOne({ _id: req.params.id })
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err))
}


////// update room
module.exports.updateRoom = (req,res) => {
    Room.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedRoom => res.json(updatedRoom))
        .catch(err => res.status(400).json(err))
} 