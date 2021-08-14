const RoomController = require("../controllers/room.controller");

module.exports = app => {
    app.get("/api/rooms", RoomController.getAllRooms);
    app.get("/api/room/:id", RoomController.getOneRoom);
    app.post("/api/room", RoomController.createRoom);
    app.delete("/api/room/:id", RoomController.deleteRoom);
    app.put("/api/room/:id", RoomController.updateRoom);
};