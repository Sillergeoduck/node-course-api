    const mongoose = require('mongoose');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/TodoApp',);
    //save something
    // mongoose will type cast number , string , boolean

    module.exports = {
        mongoose
    };