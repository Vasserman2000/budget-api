const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'budgetdb-dev'

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, async(error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    console.log(db.collection('spendings').countDocuments({}, (error, count) => {
        console.log(count)
    }));
})