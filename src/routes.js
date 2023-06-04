const { addAttendanceHandler } = require('./handler/addAttendanceHandler');
const { addClassHandler } = require('./handler/addClassHandler');
const { addUserHandler } = require('./handler/addUserHandler');
const { getAllAttendanacesHandler } = require('./handler/getAllAttendancesHandler');
const { getAllClassesHandler } = require('./handler/getAllClassesHandler');
const { loginHandler } = require('./handler/loginHandler');

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
    method: 'POST',
    path: '/api/users/login',
    handler: loginHandler,
  },
  {
    method: 'POST',
    path: '/api/users/register',
    handler: addUserHandler,
  },
];

module.exports = routes;
