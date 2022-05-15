const {User} = require('../models');

const userData = [
    {
        username: 'pedro',
        password: 'secretpassword'
    },
    {
        username: 'france',
        password: 'secretpassword2'
    },
    {
        username: 'mary',
        password: 'secretpassword3'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser; 