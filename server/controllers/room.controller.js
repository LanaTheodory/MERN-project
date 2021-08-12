const { Room } = require('../models/room.model');

////// Create a room 

module.exports.createRoom = (req,res) => {
    const {roomName, user} = req.body;
    Room.create({
        roomName,
        user
    })
        .then(room => res.json(room))
        .catch(err => res.status(400).json(err))
}

////// Get all rooms

module.exports.getAllRooms = (req,res) => {
    Room.find({})
        .then(room => res.json(room))
        .catch(err => err.json(err))
}

////// find one room
module.exports.getOneRoom = (req,res) => {
    Room.findOne({_id: req.params.id})
        .then(room => res.json(room))
        .catch(err => res.json(err))
}

////// delete room
module.exports.deleteRoom = (req,res) => {
    Room.deleteOne({_id: req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err))
}