const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use('/api', router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
