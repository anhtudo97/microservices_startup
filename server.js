const server = require('express')();
const { databaseFunction } = require('./database');

server
    .get('/', (req, res) => {
        res.send(databaseFunction());
    })
    .get('/another', (_, res) => {
        res.send('still working');
    })

server.listen(3000, () => {
    console.log('I am listening on port 4000');
})