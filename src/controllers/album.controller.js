const { Album } = require('../models');
module.exports.index = async (req, res) => {
    try {
        const album = await Album.findAll();
        res.send({ "items": album })
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.show = async (req, res) => {
    try {
        const albumId = req.params.album;
        const album = await Album.findOne({
            where: {
                id: albumId
            }
        });
        if (!album) {
            res.status(400).send({
                message: "Album not found!"
            });
            return;
        }
        res.send(album)
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.destroy = async (req, res) => {
    try {
        const albumId = req.params.album;
        const album = await Album.findByPk(albumId);
        if (!album) {
            res.status(400).send({
                message: "Not found!"
            });
            return;
        }
        await Album.destroy({
            where: {
                id: albumId
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
            album_name: req.body.album_name,
            artist_id: req.body.artist_id
        }
        const album = await Album.create(body);
        res.send(album);
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}

module.exports.update = async (req, res) => {
    try {
        const albumId = req.params.album;
        const album = await Album.findByPk(albumId);
        if (!album) {
            res.status(400).send({
                message: "Album not found!"
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
            album_name: req.body.album_name,
            artist_id: req.body.artist_id
        }
        await Album.update(body, {
            where: {
                id: albumId
            }
        });
        res.send({
            message: "Update success!"
        });
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}
