/* eslint-disable camelcase */
const User = require('../models/users');

const updateUserDataHandler = async (request, h) => {
  const { username } = request.params; // username user yang akan diubah
  const { name, email, nim_nip } = request.payload; // Data yang akan diubah

  try {
    // Mengecek apakah user dengan ID yang diberikan ada di database
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      const response = h.response({
        status: 'fail',
        message: 'User tidak ditemukan',
      }).code(404);
      return response;
    }

    // Update data user
    // Menggunakan nilai yang baru jika tersedia, atau menggunakan nilai yang ada
    existingUser.name = name || existingUser.name;
    existingUser.email = email || existingUser.email;
    existingUser.nim_nip = nim_nip || existingUser.nim_nip;

    await existingUser.save();

    const response = h.response({
      status: 'success',
      message: 'Data user berhasil diubah',
    });
    response.code(200);
    return response;
  } catch (error) {
    console.log('err', error);
    const response = h.response({
      status: 'fail',
      message: `Gagal mengubah data user karena ${error}`,
    });
    response.code(500);
    return response;
  }
};

module.exports = { updateUserDataHandler };
