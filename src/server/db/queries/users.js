const knex = require('../connection');

function getAllUsers() {
    return knex('users')
        .select('*');
}

function getSingleUsers(login, password) {
    return knex('users')
        .select('*')
        .where({loginuser: login, passworduser: password});
}

function setNewUser(obj) {
    return knex('users')
        .insert(obj)
}

module.exports = {
    getAllUsers,
    getSingleUsers,
    setNewUser
};