    const mongoose = require('mongoose');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/TodoApp',);
    //save something
    // mongoose will type cast number , string , boolean

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

    let User = mongoose.model('User', {
        email: {
            type: String,
            minLength: 1,
            trim: true,
            required: true
        }
    });

    let newUser = new User({
        email: '   rajeev@gmail.com   '
    });

    newUser.save().then( (doc) => {
        console.log(doc);
    }, (err) => {
        console.log(err);
    });


    let newTodo =  new Todo({
       text: 'cook dinner',
    });

    // let newTodo1 = new Todo ( {
    //     text: 'for me',
    //     completed: true,
    //     completedAt: 2019
    // });

    let newTodo1 = new Todo ( {
        text: '   edit this video  '
    });

    newTodo.save().then( (doc) => {
        console.log('Saved to Todo', doc);
    }, (err) => {
        console.log('unable to save Todo');
    });

    newTodo1.save().then( (doc) => {
        console.log('Saved to Todo', JSON.stringify(doc, undefined, 2));
    }, (err) => {
        console.log('unable to save Todo');
    });