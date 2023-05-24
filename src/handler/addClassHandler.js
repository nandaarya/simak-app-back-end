const Class = require('../models/classes');

const addClassHandler = async (request, h) => {
  const {
    className, lecturer, material, startedAt, finishAt, room,
  } = request.payload;

  if (!className || !lecturer || !material || !startedAt || !finishAt || !room) {
    const response = h.response({
      status: 'fail',
      message: 'Data jadwal kelas tidak lengkap',
    }).code(400);
    return response;
  }

  // Generate classCode (Temporary)
  const classCode = `Kode Kelas ${className}`;

  const newClass = new Class({
    classCode, className, lecturer, material, startedAt, finishAt, room,
  });

  try {
    await newClass.save();
    const response = h.response({
      status: 'success',
      message: 'Jadwal Kelas berhasil ditambahkan',
      data: {
        classCode,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    console.log('err', error);
    const response = h.response({
      status: 'fail',
      message: `Jadwal Kelas gagal ditambahkan karena ${error}`,
    });
    response.code(500);
    return response;
  }
};

module.exports = { addClassHandler };
