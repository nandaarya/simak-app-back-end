const attendanceList = require('../attendanceList');

const getAllAttendanacesHandler = () => ({
  status: 'success',
  data: {
    attendanceList,
  },
});

module.exports = { getAllAttendanacesHandler };
