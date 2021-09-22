const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGOURI} = require('./config');

const PORT = 5000;

mongoose.connect(MONGOURI).then(() =>{
    console.log("Database Connected Sucessfully")
})

app.get('/',(req,res) => {
    res.send("Hello India")
});

app.listen(PORT,() =>{
    console.log(`Server is running over${PORT}`);
})