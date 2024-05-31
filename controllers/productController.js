const { Product } = require('../models');
const { productSchema } = require('../validation/productValidation');

exports.createProduct = async (req, res) => {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const imageUrl = req.file ? req.file.path : null;
        const product = await Product.create({ ...req.body, userId: req.user.id, imageUrl });
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { userId: req.user.id } });
        res.send(products);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateProduct = async (req, res) => {
    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const imageUrl = req.file ? req.file.path : req.body.imageUrl;
        const [updated] = await Product.update({ ...req.body, imageUrl }, {
            where: {
                id: req.params.id,
                userId: req.user.id
            }
        });

        if (!updated) {
            return res.status(404).send();
        }

        res.send({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.destroy({
            where: {
                id: req.params.id,
                userId: req.user.id
            }
        });

        if (!deleted) {
            return res.status(404).send();
        }

        res.send({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
};
