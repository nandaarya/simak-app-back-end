/* eslint-disable camelcase */
const Attendance = require('../models/attendances');

const getAllAttendanacesHandler = async (request) => {
  const { nim } = request.query;

  try {
    let attendances;
    if (nim) {
      attendances = await Attendance.find({ nim });
    } else {
      attendances = await Attendance.find();
    }

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
