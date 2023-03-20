const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const port = process.env.APP_PORT;
const { checkSchema } = require('express-validator');
const artistController = require('./controllers/artist.controller');
const songController = require('./controllers/song.controller');
const albumController = require('./controllers/album.controller');
const categoryController = require('./controllers/category.controller');
const userController = require('./controllers/user.controller');
const { userDataValidate, songDataValidate } = require('./validations');
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

// songs
app.get('/songs', songController.index)
app.get('/songs/:song', songController.show)
app.delete('/songs/:song', songController.destroy)
app.post('/songs', checkSchema(songDataValidate), songController.store)
app.put('/songs/:song', checkSchema(songDataValidate), songController.update)

// albums
app.get('/albums', albumController.index)
app.get('/albums/:album', albumController.show)
app.delete('/albums/:album', albumController.destroy)
app.post('/albums', albumController.store)
app.put('/albums/:album', albumController.update)

// categories
app.get('/categories', categoryController.index)
app.get('/categories/:category', categoryController.show)
app.delete('/categories/:category', categoryController.destroy)
app.post('/categories', categoryController.store)
app.put('/categories/:category', categoryController.update)

// users
app.get('/users', userController.index)
app.get('/users/:user', userController.show)
app.delete('/users/:user', userController.destroy)
app.post('/users', checkSchema(userDataValidate), userController.store)
app.put('/users/:user', checkSchema(userDataValidate), userController.update)


app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}`)
})