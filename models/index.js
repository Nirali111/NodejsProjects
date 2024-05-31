const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false
});

const User = require('./user')(sequelize);
const Product = require('./product')(sequelize);

// Define associations
User.hasMany(Product, { foreignKey: 'userId' });
Product.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync();

module.exports = { sequelize, User, Product };
