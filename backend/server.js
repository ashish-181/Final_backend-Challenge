require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log("database connected");
})

const trainersroute = require('./routes/trainers');
const usersroute = require('./routes/users');

app.use('/trainers',trainersroute);
app.use('/users',usersroute);


app.listen(port,()=>{
  console.log(`server running ${port}`);
});