const Sequelize = require('sequelize');
const DB_ACCESS = require('../config').DB_ACCESS;

const sequelize = new Sequelize(DB_ACCESS);

const InteriorTrimMaterial = sequelize.define('interior_trim_materials', {
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
    .then(() => console.log('interior_trim_materials table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = InteriorTrimMaterial;