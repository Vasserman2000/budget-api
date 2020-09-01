const mongodb = require('mongodb')
const chalk = require('chalk')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'budgetdb-dev'

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, async(error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('spendings').countDocuments({}, (error, count) => {
        console.log(chalk.blue("Total number of docs: " + count))
    });

    db.collection('spendings').findOne({}, (err, doc) => {
        console.log(doc.seller)
    })

    // db.collection('spendings').find({"seller": 'Super Ifrach'}).toArray((err, res) => {
    //     console.log(res)
    // })

    // insert a doc
    // db.collection('spendings').insertOne({
    //     test: "testing insertion",
    //     author: "Elisha Vasserman"
    // }, (error,result) => {
    //     if (error){
    //         return console.log('Unable to insert')
    //     }
    //     console.log(result.ops)
    // })
})