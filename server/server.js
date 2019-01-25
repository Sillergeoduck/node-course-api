    const express = require('express');
    const bodyParser = require('body-parser');
    const { ObjectID } = require('mongodb');

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

    app.get('/todos', (req, res) => {
        Todo.find().then( (todos) => {
            res.send({
                todos,
            });
        }, (err) => {
            res.status(400).send(err);
        })
    });


    app.get('/todos/:id', (req, res) => {
        //valid id using isValid
        //respond with 404
        //send back empty body
        let id = req.params.id;
        if (!ObjectID.isValid(id)) {
         return res.status(404).send();
        }

        Todo.findById(id).then( (todo) => {
            if (!todo) {
                return res.status(404).send();
            }
            res.send({todo});
        }).catch( (error) => {
            res.status(400).send();
        })


        //findById - query TOdos collection
        //success
        //if todo send it back
        //if no todo send back 404 with empty body
        //error
        // 400 - and send empty body back

    });

    app.listen(3000, () => {
        console.log('Started on Port 3000');
    });


    module.exports = {
        app
    };


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