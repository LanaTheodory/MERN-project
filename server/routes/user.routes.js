const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config');

model.exports = app => {
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users", UserController.getAll);
    app.get("/api/get/:id", UserController.findUser);
    app.get("/api/logout", UserController.logout);
}