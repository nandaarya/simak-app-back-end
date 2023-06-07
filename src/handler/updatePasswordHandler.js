const User = require('../models/users');

const updatePasswordHandler = async (request, h) => {
  const { username } = request.params; // username user yang akan diubah
  const { oldPassword, newPassword, confirmNewPassword } = request.payload;

  try {
    // Mencari user berdasarkan username
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      const response = h.response({
        status: 'fail',
        message: 'Username salah / tidak ditemukan',
      }).code(404);
      return response;
    }

    // Membandingkan password lama dengan password yang ada dalam database
    if (existingUser.password !== oldPassword) {
      const response = h.response({
        status: 'fail',
        message: 'Password lama tidak valid',
      }).code(400);
      return response;
    }

    // Memastikan konfirmasi password baru sesuai dengan password baru
    if (newPassword !== confirmNewPassword) {
      const response = h.response({
        status: 'fail',
        message: 'Konfirmasi password baru tidak sesuai',
      }).code(400);
      return response;
    }

    // Mengubah password
    existingUser.password = newPassword;
    await existingUser.save();

    const response = h.response({
      status: 'success',
      message: 'Password berhasil diubah',
    });
    response.code(200);
    return response;
  } catch (error) {
    console.log('err', error);
    const response = h.response({
      status: 'fail',
      message: `Gagal mengubah password karena ${error}`,
    });
    response.code(500);
    return response;
  }
};

module.exports = { updatePasswordHandler };
