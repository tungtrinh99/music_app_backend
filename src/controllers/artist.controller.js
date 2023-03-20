const { Artist } = require('../models');
module.exports.index = async (req, res) => {
    try {
        const artist = await Artist.findAll();
        res.send({ "items": artist })
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.show = async (req, res) => {
    try {
        const artistId = req.params.artist;
        const artist = await Artist.findOne({
            where: {
                id: artistId
            }
        });
        res.send(artist)
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.destroy = async (req, res) => {
    try {
        const artistId = req.params.artist;
        const artist = await Artist.findByPk(artistId);
        if (!artist) {
            res.status(400).send({
                message: "Not found!"
            });
            return;
        }
        await Artist.destroy({
            where: {
                id: artistId
            }
        });
        res.send({ message: "Delete success!" });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.store = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });

            return;
        }
        const body = {
            name: req.body.name,
            birthday: req.body.birthday,
            hometown: req.body.hometown,
            debut_date: req.body.debut_date
        }
        const artist = await Artist.create(body);
        res.send(artist);
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}

module.exports.update = async (req, res) => {
    try {
        const artistId = req.params.artist;
        const artist = await Artist.findByPk(artistId);
        if (!artist) {
            res.status(400).send({
                message: "Artist not found!"
            });
            return;
        }
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        const body = {
            name: req.body.name,
            birthday: req.body.birthday,
            hometown: req.body.hometown,
            debut_date: req.body.debut_date
        }
        await Artist.update(body, {
            where: {
              id: artistId
            }
          });
        res.send({
            message: "Update success!"
        });
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}
