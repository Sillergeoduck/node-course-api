    const mongoose = require('mongoose');

    let User = mongoose.model('User', {
        email: {
            type: String,
            minLength: 1,
            trim: true,
            required: true
        }
    });

    module.exports = {
        User
    };