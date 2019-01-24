    const express = require('express');
    const bodyParser = require('body-parser');

    const { mongoose } = require('./db/mongoose');
    const {Todo} = require('./models/todo');
    const {User} = require('./models/user');

    let app = express();

    app.use(bodyParser.json());

    app.post('/todos', (req, res) => {
        let todo = new Todo ({
            text: req.body.text
        });

        todo.save().then( (doc) => {
            res.send(doc);
        }, (err) => {
            res.status(400).send(err)
        })
    });


    app.listen(3000, () => {
        console.log('Started on Port 3000');
    });


    // let newUser = new User({
    //     email: '   rajeev@gmail.com   '
    // });
    //
    // newUser.save().then( (doc) => {
    //     console.log(doc);
    // }, (err) => {
    //     console.log(err);
    // });
    //
    //
    // let newTodo =  new Todo({
    //    text: 'cook dinner',
    // });
    //
    // // let newTodo1 = new Todo ( {
    // //     text: 'for me',
    // //     completed: true,
    // //     completedAt: 2019
    // // });
    //
    // let newTodo1 = new Todo ( {
    //     text: '   edit this video  '
    // });
    //
    // newTodo.save().then( (doc) => {
    //     console.log('Saved to Todo', doc);
    // }, (err) => {
    //     console.log('unable to save Todo');
    // });
    //
    // newTodo1.save().then( (doc) => {
    //     console.log('Saved to Todo', JSON.stringify(doc, undefined, 2));
    // }, (err) => {
    //     console.log('unable to save Todo');
    // });