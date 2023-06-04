const User = require('../models/users');

const loginHandler = async (request, h) => {
  const { username, password } = request.payload;

  if (!username || !password) {
    const response = h.response({
      status: 'fail',
      message: 'Data login tidak lengkap',
    }).code(400);
    return response;
  }

  // Mencari pengguna dengan nama pengguna yang diberikan
  const user = await User.findOne({ username });

  if (user === null) {
    // Tidak ada pengguna dengan nama pengguna yang diberikan
    const response = h.response({
      status: 'fail',
      message: 'Username salah',
    }).code(401);
    return response;
  }

  if (password === user.password) {
    // Kata sandi cocok, proses login berhasil
    const response = h.response({
      status: 'success',
      message: 'Login berhasil',
      data: {
        user,
      },
    }).code(200);
    return response;
  }

  // Jika tidak ada pengguna atau kata sandi tidak cocok
  const response = h.response({
    status: 'fail',
    message: 'Password salah',
  }).code(401);
  return response;
};

module.exports = { loginHandler };
