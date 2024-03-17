const express = require('express');
const urlRoute = require('./route/url')

const {connectToMongoDB} = require('./connect')

app = express();

connectToMongoDB('mongodb://localhost:27017/')

PORT=8001;

app.use('/url', urlRoute)

app.listen(PORT, console.log(`Started server listening on ${PORT}`));