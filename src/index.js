const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = process.env.APP_PORT;
const artistController = require('./controllers/artist.controller');
dotenv.config();
// support parse of json in HTTP POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

// artists
app.get('/artists', artistController.index)
app.get('/artists/:artist', artistController.show)
app.delete('/artists/:artist', artistController.destroy)
app.post('/artists', artistController.store)
app.put('/artists/:artist', artistController.update)

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}`)
})