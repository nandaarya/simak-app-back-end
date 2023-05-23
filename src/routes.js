const { addAttendanceHandler } = require('./handler/addAttendanceHandler');
const { addClassHandler } = require('./handler/addClassHandler');
const { getAllAttendanacesHandler } = require('./handler/getAllAttendancesHandler');
const { getAllClassesHandler } = require('./handler/getAllClassesHandler');

const routes = [
  {
    method: 'POST',
    path: '/api/jadwal',
    config: {
      payload: {
        allow: 'application/json',
      },
    },
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
];

module.exports = routes;
