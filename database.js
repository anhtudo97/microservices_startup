const server = require('express')();

server.get('/db', (req, res) => {
    const data = [{ title: 'New title a', content: 'Content new' }];
    res.send(data);
})

server.listen(4000, () => {
    console.log('Database connector running on port 4000');
})