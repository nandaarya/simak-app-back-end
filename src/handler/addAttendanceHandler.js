// const attendanceList = require('../attendanceList');
const Attendance = require('../models/attendances');

const addAttendanceHandler = async (request, h) => {
  const { nim, classCode } = request.payload;

  if (!nim || !classCode) {
    const response = h.response({
      status: 'fail',
      message: 'Data presensi tidak lengkap',
    }).code(400);
    return response;
  }

  const status = 'Hadir';

  const newAttendance = new Attendance({ nim, classCode, status });

  try {
    await newAttendance.save();
    const response = h.response({
      status: 'success',
      message: 'Presensi Berhasil',
    });
    response.code(201);
    return response;
  } catch (error) {
    console.log('err', error);
    const response = h.response({
      status: 'fail',
      message: `Presensi Gagal karena ${error}`,
    });
    response.code(500);
    return response;
  }

  // attendanceList.push(newAttendance);

  // const isSuccess = attendanceList.some((presensi) => presensi.classCode === classCode
  // && presensi.nim === nim);

  // if (isSuccess) {
  //   const response = h.response({
  //     status: 'success',
  //     message: 'Presensi berhasil',
  //     data: {
  //       classCode,
  //     },
  //   });
  //   response.code(201);
  //   return response;
  // }
  // const response = h.response({
  //   status: 'fail',
  //   message: 'Presensi gagal',
  // });
  // response.code(500);
  // return response;
};

module.exports = { addAttendanceHandler };
