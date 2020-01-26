const db = require('../data/db.js')

function insert(user) {
    return db('users').insert(user, 'id').then(([id]) => id)
}

function find() {
    return db('users').select('id', 'username', 'department').orderBy('department')
}

function findByUserName(username) {
    return db('users').where({ username }).select('id', 'username', 'department').first();
}

function findByDepartment(department) {
    return db('users').where({ department }).select('id', 'username', 'department')
}

function deleteUser(username){
    return db('users').where({ username }).del();
}

module.exports = {
    insert,
    find,
    findByUserName,
    findByDepartment,
    deleteUser
}