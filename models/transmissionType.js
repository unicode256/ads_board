const Sequelize = require('sequelize');
const DB_ACCESS = require('../config').DB_ACCESS;

const sequelize = new Sequelize(DB_ACCESS);

const TypeOfTransmission = sequelize.define('transmission_types', {
    system_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name_ru: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

sequelize.sync()
    .then(() => console.log('types_of_transmission table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = TypeOfTransmission;