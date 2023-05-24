// const attendanceList = require('../attendanceList');
const Attendance = require('../models/attendances');

const getAllAttendanacesHandler = async () => {
  try {
    const attendances = await Attendance.find();
    return {
      status: 'success',
      data: {
        attendances,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error,
    };
  }
};

module.exports = { getAllAttendanacesHandler };
