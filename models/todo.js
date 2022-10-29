// File Name: todo.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// WebApp name: To-Do

// Import
let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model("Todo", todoModel);