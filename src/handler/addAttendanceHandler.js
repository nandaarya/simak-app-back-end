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

  // Cek apakah sudah ada presensi dengan NIM dan classCode yang diberikan
  const existingAttendance = await Attendance.findOne({ nim, classCode });

  if (existingAttendance) {
    const response = h.response({
      status: 'fail',
      message: 'Anda sudah melakukan presensi untuk kelas ini!',
    }).code(409); // Gunakan kode status 409 (Conflict) untuk data yang sudah ada
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
};

module.exports = { addAttendanceHandler };
