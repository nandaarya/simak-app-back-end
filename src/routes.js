const { addClassHandler } = require('./handler/addClassHandler');

const routes = [
  {
    method: 'POST',
    path: '/api/jadwal',
    handler: addClassHandler,
  },
  {
    method: 'GET',
    path: '/api/jadwal',
    handler: () => {},
  },
];

module.exports = routes;
