    const {MongoClient} = require('mongodb');

    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if(err) {
            return console.log('Unable to connect to the MogoDb');
        }
         console.log('MongoDB connection was Complete!!!');

        let db = client.db('TodoApp');

        //delete many
        // db.collection('ToDos').deleteMany({text: 'something to DO'}).then( (res) => {
        //     console.log(res);
        // });
        //delete one
        // db.collection('ToDos').deleteOne({text: 'something to DO'}).then( (res) => {
        //     console.log(res);
        // });
        //find one and delete
        db.collection('ToDos').findOneAndDelete({text: 'something'}).then( (res) => {
            console.log(res);
        });

        //db.close();

    });