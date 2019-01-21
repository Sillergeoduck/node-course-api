    // const MongoClient = require('mongodb').MongoClient;
    const { MongoClient, ObjectID} = require('mongodb');

    MongoClient.connect('mongodb://localhost:27017/' ,(err, client) => {
        if (err) {
           return console.log('Unable to connect to MongoDB server');
        }
            console.log('Connected to MongoDB server Successfully');

        const db = client.db('TodoApp');

        // db.collection('ToDos').find({
        //     _id: new ObjectID('5c405d4c716eb417f3fbe2fc')
        // }).toArray().then((docs) => {
        //     console.log('ToDos');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Unable to fetch the Docs');
        // });

        // db.collection('ToDos').find().count().then((count) => {
        //     console.log('ToDos Count', count);
        //    // console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Unable to fetch the Docs');
        // });

        db.collection('Users').find({name: 'Rajeev'}).toArray().then( (docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        })
        //db.close();
    });

