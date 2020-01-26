const router = require('express').Router();
const Users = require('./users-model.js');

// list of all users
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error retrieving users'})
        })
})

router.get('/user', (req, res) => {
    const { username } = req.body;
    Users.findByUserName(username)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error retrieving that user'})
        })
})

router.post('/create', (req, res) => {
    const { username, password, department } = req.body;
    Users.insert({ username, password, department })
        .then(id => {
            res.status(201).json({ message: `User ${username} registered`, id })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error registering the user'})
        })
})

router.delete('/destroy', (req, res) => {
    const { username } = req.body;
    Users.deleteUser(username)
        .then(user => {
            res.status(204).json({ message: 'User deleted'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'There was an error deleting the user'})
        })
})


module.exports = router;