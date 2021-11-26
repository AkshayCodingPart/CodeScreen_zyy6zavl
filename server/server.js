const express = require("express");
const app = express();
var cors = require("cors");

const PORT = 3000;

app.use(cors());
app.use('/hello', require('./controllers/hello'));
app.use('/about', require('./controllers/about'));

app.listen(PORT, 
    console.log(`Server started on port ${PORT}`)
);