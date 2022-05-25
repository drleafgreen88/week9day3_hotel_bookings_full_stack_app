const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log(err);
    }
    const db = client.db('hotel_california');
    const guestsCollection = db.collection('guests');
    const guestsRouter = createRouter(guestsCollection)
    app.use('/api/guests', guestsRouter);
    app.listen(9000, function () {
        console.log(`app listening on port ${this.address().port}`);
    })
})














