const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.APP_PORT;

app.get('/users', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}`)
})