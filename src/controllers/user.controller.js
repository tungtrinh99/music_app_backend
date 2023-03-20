const { User } = require('../models');
const { validationResult } = require('express-validator');

module.exports.index = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send({ "items": user })
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.show = async (req, res) => {
    try {
        const userId = req.params.user;
        const user = await User.findOne({
            where: {
                id: userId
            }
        });
        if (!user) {
            res.status(400).send({
                message: "user not found!"
            });
            return;
        }
        res.send(user)
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.destroy = async (req, res) => {
    try {
        const userId = req.params.user;
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(400).send({
                message: "Not found!"
            });
            return;
        }
        await user.destroy({
            where: {
                id: userId
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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const body = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            birthday: req.body.birthday
        }
        const user = await User.create(body);
        res.send(user);
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}

module.exports.update = async (req, res) => {
    try {
        const userId = req.params.user;
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(400).send({
                message: "user not found!"
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
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            birthday: req.body.birthday
        }
        await User.update(body, {
            where: {
                id: userId
            }
        });
        res.send({
            message: "Update success!"
        });
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}
