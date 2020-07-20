const express = require('express');
const app = express();

const mongoose = require('mongoose');
const DATABASE = "mongodb://mymongo:27017/testup";

mongoose.connect(DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
.then(() => {
    console.log("DB connectd")
})
.catch(() => {
    console.log("error in db connection")
})



app.get('/', (req, res, next) => {
    res.json({
        message: "u r in root"
    })
})

app.get('/login', (req, res, next) => {
    res.send('<h1>hello from login </h1>')
})

app.listen(8000, () => {
    console.log('app is running...')
})
