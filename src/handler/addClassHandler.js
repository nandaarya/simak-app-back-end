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

  function generateClassCode() {
    switch (className) {
      case 'Grafis dan Visualisasi':
        return 'TIF414022';
      case 'Interaksi Manusia dan Komputer':
        return 'TIF414021';
      case 'Perancangan Struktur Data':
        return 'TIF414018';
      case 'Basis Data':
        return 'TIF414020';
      case 'Metode Pengembangan Perangkat Lunak':
        return 'TIF414019';
      case 'Perancangan Algoritma dan Pemrograman':
        return 'TIF414017';
      case 'Rekayasa Perangkat Lunak':
        return 'TIF414016';
      default:
        return null;
    }
  }

  // Generate classCode (Temporary)
  const classCode = generateClassCode(className) + material;

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
