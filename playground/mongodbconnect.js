    // const MongoClient = require('mongodb').MongoClient;
    const { MongoClient, ObjectID} = require('mongodb');

    MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(err, client) => {
        if (err) {
           return console.log('Unable to connect to MongoDB server');
        }
            console.log('Connected to MongoDB server Successfully');

        const db = client.db('TodoApp');

        db.collection('ToDos').insertOne({
                text: 'something to DO',
                completed: false
        }, (err, result) => {
                if (err) {
                    return console.log('Unable to insert ToDo');
                }
                 console.log(JSON.stringify(result.ops, undefined, 2));
        });

        db.collection('Users').insertOne({
            name: 'Rajeev',
            age: 30
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert Users');
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
            console.log(result.ops[0]._id.getTimestamp());
        });

        client.close();
    });

