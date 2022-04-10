const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // database file
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 1912; // you can set your according port number, 1912 is just my fav ;)

server.use(middlewares);
server.use(router);

server.listen(port);