const classes = require('../classes');

const addClassHandler = (request, h) => {
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

  const newClass = {
    classCode, className, lecturer, material, startedAt, finishAt, room,
  };
  classes.push(newClass);

  const isSuccess = classes.some((jadwal) => jadwal.classCode === classCode);

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Jadwal Kelas berhasil ditambahkan',
      data: {
        classCode,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Jadwal Kelas gagal ditambahkan',
  });
  response.code(500);
  return response;
};

module.exports = { addClassHandler };
