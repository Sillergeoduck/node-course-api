    const mongoose = require('mongoose');

    let Todo = mongoose.model('Todo', {
        text : {
            type: String,
            required: true,
            minLength: 1,
            trim: true
        },
        completed : {
            type: Boolean,
            default: false
            //required: true
        },
        completedAt: {
            type: Number,
            default: null
            //required: true
        }

    });

    module.exports = {
        Todo
    };