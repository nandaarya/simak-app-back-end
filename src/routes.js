const { addClassHandler } = require('./handler/addClassHandler');
const { getAllClassesHandler } = require('./handler/getAllClassesHandler');

const routes = [
  {
    method: 'POST',
    path: '/api/jadwal',
    handler: addClassHandler,
  },
  {
    method: 'GET',
    path: '/api/jadwal',
    handler: getAllClassesHandler,
  },
];

module.exports = routes;
