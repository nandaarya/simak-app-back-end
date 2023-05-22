const attendanceList = require('../attendanceList');

const addAttendanceHandler = (request, h) => {
  const { nim, classCode } = request.payload;

  if (!nim || !classCode) {
    const response = h.response({
      status: 'fail',
      message: 'Data presensi tidak lengkap',
    }).code(400);
    return response;
  }

  const status = 'Hadir';

  const newAttendance = { nim, classCode, status };

  attendanceList.push(newAttendance);

  const isSuccess = attendanceList.some((presensi) => presensi.classCode === classCode
  && presensi.nim === nim);

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Presensi berhasil',
      data: {
        classCode,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Presensi gagal',
  });
  response.code(500);
  return response;
};

module.exports = { addAttendanceHandler };
