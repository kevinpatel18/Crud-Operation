const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();



mongoose.connect('mongodb://localhost:27017/Crud-Operation', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error' , (err) =>{ 
  console.log("err" , err);
})


db.once('open' , () =>{ 
  console.log('Database connected Successfully');
})
app.use(bodyParser.json());
app.use('/uploads' , express.static('uploads'))
const authController = require('./routes/user')

app.use(`/api`, authController);

app.get('/', (req, res) => {
  console.log("asdsad");
  res.send('Products Backend!');
});

var http = require('http').Server(app);
http.listen(3000, () => {
    console.log(new Date())
});
console.log(`Server start listening port: 3000`);