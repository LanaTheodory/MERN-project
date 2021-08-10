const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); 
app.use(cors());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
require('./routes/user.routes')(app);
require('./routes/post.routes')(app);
require('./routes/comment.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
