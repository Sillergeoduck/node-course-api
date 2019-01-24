    const { ObjectID } = require('mongodb');
    const { mongoose } = require('./../server/db/mongoose');
    const { Todo}   = require ('./../server/models/todo');
    const { User } = require('./../server/models/user');

    let id = "5c49929b4412731978de67d1";

    Todo.find({
        _id: id
    }).then( (todos) => {
        console.log('Todos', todos);
    });

    Todo.findOne({
        _id: id
    }).then( (todo) => {
        console.log('Todos', todo);
    });

    Todo.findById(id).then( (todo) => {
        if (!todo) {
            return  console.log('Todo by ID not found');
        }
        console.log('Todo by ID', todo);
    }).catch( (e) => {
            console.log(e);
    });

    User.findById("5c496190e05c090bbc96e0eb").then( (user) => {
        if ( !user) {
           return console.log( 'User by ID not found')
        }
        console.log('User Object is ', JSON.stringify(user, undefined, 2));
    }, (error) => {
        console.log(error);
    });