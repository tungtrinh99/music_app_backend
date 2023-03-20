const { Category } = require('../models');
module.exports.index = async (req, res) => {
    try {
        const category = await Category.findAll();
        res.send({ "items": category })
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.show = async (req, res) => {
    try {
        const categoryId = req.params.category;
        const category = await Category.findOne({
            where: {
                id: categoryId
            }
        });
        if (!category) {
            res.status(400).send({
                message: "category not found!"
            });
            return;
        }
        res.send(category)
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.destroy = async (req, res) => {
    try {
        const categoryId = req.params.category;
        const category = await Category.findByPk(categoryId);
        if (!category) {
            res.status(400).send({
                message: "Not found!"
            });
            return;
        }
        await category.destroy({
            where: {
                id: categoryId
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
            title: req.body.title,
        }
        const category = await Category.create(body);
        res.send(category);
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}

module.exports.update = async (req, res) => {
    try {
        const categoryId = req.params.category;
        const category = await Category.findByPk(categoryId);
        if (!category) {
            res.status(400).send({
                message: "category not found!"
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
            title: req.body.title,
        }
        await Category.update(body, {
            where: {
                id: categoryId
            }
        });
        res.send({
            message: "Update success!"
        });
    } catch (err) {
        res.status(500).send(err.message || 'error server');
    }
}
