//sits on top of Node to make the routing, request handling, and responding easier to write
const express = require('express');
//used to parse incoming request bodies in a middleware
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const mainRouter = require('./routes/main-route');
const path = require("path");
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(express.static(path.join(__dirname, "client/build")));

app.get('/test', (req, res) => {
  res.json('Helooooooooooooooooooooooooooooo');
})

// default option
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(mainRouter);
app.use(fileUpload());

const db = require('./db');
// app.use(express.static(path.join(__dirname, "front-end/public/UpdateUsers")));

// Connection Pool
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
