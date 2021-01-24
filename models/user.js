const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const DB_ACCESS = require('../config').DB_ACCESS;

const sequelize = new Sequelize(DB_ACCESS);

const User = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
});

User.prototype.validPassword = function (password){
    return bcrypt.compareSync(password, this.password);
} 

sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = User;