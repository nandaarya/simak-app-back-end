const { addAttendanceHandler } = require('./handler/addAttendanceHandler');
const { addClassHandler } = require('./handler/addClassHandler');
const { getAllAttendanacesHandler } = require('./handler/getAllAttendancesHandler');
const { getAllClassesHandler } = require('./handler/getAllClassesHandler');
const { tesDatabaseHandler } = require('./handler/tesDatabaseHandler');

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
  {
    method: 'POST',
    path: '/api/presensi',
    handler: addAttendanceHandler,
  },
  {
    method: 'GET',
    path: '/api/presensi',
    handler: getAllAttendanacesHandler,
  },
  {
    method: 'GET',
    path: '/api/database',
    handler: tesDatabaseHandler,
  },
];

module.exports = routes;
