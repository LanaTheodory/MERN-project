
const notificationControllers = require("../controllers/notification.controller");

module.exports = app => {
  app.get("/api/notification", notificationControllers.getAllNotifications);
  app.get("/api/notification/:id", notificationControllers.getOneNotification);
  app.post("/api/notification", notificationControllers.createNotification);
  app.put("/api/notification/:id", notificationControllers.updateNotification);
  app.delete("/api/notification/:id", notificationControllers.deleteNotification);
};
