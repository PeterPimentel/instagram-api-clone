require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(process.env.DB_HOST,{ useNewUrlParser: true });

//Creating a custom middleware do add the IO Socket
//After that, all request will be with the IO Socket used here
app.use((req,res,next)=>{
    req.io = io;
    next();
});

app.use(cors());

app.use('/files',express.static(path.resolve(__dirname,'..','uploads','resized')));

app.use(require('./routes.js'));

server.listen(process.env.APP_PORT);
