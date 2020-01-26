const express = require('express');

const server = express();

server.use(express.json());

const usersRouter = require('./users/users-router.js');
server.use('/users', usersRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Why are you here?'
    })
})

const port = 5000;

if(!module.parent) {
    server.listen(port, () => console.log(`Server listening on port ${port}`))
}
// this means that if this module (file) is 'required' into another file, do not start the server


module.exports = server;