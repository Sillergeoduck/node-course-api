 const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if (err) {
        return console.log('Unable to connect to the server');
    }
    console.log('Connected to the DB successfully');

    let db = client.db('TodoApp');


    db.collection('ToDos').findOneAndUpdate({
        _id: new ObjectID('5c46c092f64b8f08668c9d4f')
    }, {
        $set: {
            text : 'I am sooper star'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
});