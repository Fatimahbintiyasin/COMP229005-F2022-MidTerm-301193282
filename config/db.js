// File Name: db.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// WebApp name: To-Do

// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:xHuM6zLdF9AJ3Try@cluster005.i0tymby.mongodb.net/To-Do?retryWrites=true&w=majority";


// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}