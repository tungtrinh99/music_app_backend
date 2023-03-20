const { Song } = require('../models');
module.exports.index = async (req, res) => {
    try {
        const song = await Song.findAll();
        res.send({ "items": song })
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.show = async (req, res) => {
    try {
        const songId = req.params.song;
        const song = await Song.findOne({
            where: {
                id: songId
            }
        });
        res.send(song)
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.destroy = async (req, res) => {
    try {
        const songId = req.params.song;
        const song = await Song.findByPk(songId);
        if (!song) {
            res.status(400).send({
                message: "Not found!"
            });
            return;
        }
        await song.destroy({
            where: {
                id: songId
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
            title_song: req.body.title_song,
            lyric: req.body.lyric,
            url_song: req.body.url_song,
            artist_id: req.body.artist_id,
            album_id: req.body.album_id,
            category_id: req.body.category_id,
            release_date: req.body.release_date,
        }
        const song = await Song.create(body);
        res.send(song);
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}

module.exports.update = async (req, res) => {
    try {
        const songId = req.params.song;
        const song = await Song.findByPk(songId);
        if (!song) {
            res.status(400).send({
                message: "Song not found!"
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
            title_song: req.body.title_song,
            lyric: req.body.lyric,
            url_song: req.body.url_song,
            artist_id: req.body.artist_id,
            album_id: req.body.album_id,
            category_id: req.body.category_id,
            release_date: req.body.release_date,
        }
        await Song.update(body, {
            where: {
                id: songId
            }
        });
        res.send({
            message: "Update success!"
        });
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}
