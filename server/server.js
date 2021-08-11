require('dotenv').config({path:__dirname+'/.env'});
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser");
require('./config/mongoose.config'); 
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(cookieParser());
require('./routes/user.routes')(app);
require('./routes/post.routes')(app);
require('./routes/comment.routes')(app);
require('./routes/like.routes')(app);
require('./routes/notification.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
