const { addAttendanceHandler } = require('./handler/addAttendanceHandler');
const { addClassHandler } = require('./handler/addClassHandler');
const { addUserHandler } = require('./handler/addUserHandler');
const { getAllAttendanacesHandler } = require('./handler/getAllAttendancesHandler');
const { getAllClassesHandler } = require('./handler/getAllClassesHandler');
const { loginHandler } = require('./handler/loginHandler');
const { updatePasswordHandler } = require('./handler/updatePasswordHandler');
const { updateUserDataHandler } = require('./handler/updateUserDataHandler');

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
  {
    method: 'PUT',
    path: '/api/users/{username}',
    handler: updateUserDataHandler,
  },
  {
    method: 'PUT',
    path: '/api/users/updatePassword/{username}',
    handler: updatePasswordHandler,
  },
];

module.exports = routes;
