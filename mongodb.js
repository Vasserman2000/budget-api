const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'budgetdb-dev'

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, async(error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    client.db().admin().listDatabases({ nameOnly: true }, async (err, result) => {
        if (!err) {
            for (db of result.databases) {
                console.log('Database: ' + db.name);

                const cols = await client.db(db.name).listCollections().toArray();

                for (col of cols) {
                    console.log('--Collection: ' + col.name)
                }
            };
        } else {
            return console.log(err.message);
        }
    });
})