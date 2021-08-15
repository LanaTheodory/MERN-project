const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/users", UserController.getAll);
    app.get("/api/user/:id", UserController.findUser);
    app.put("/api/user/:id", UserController.updateUser);
    app.get("/api/logout", UserController.logout);
}