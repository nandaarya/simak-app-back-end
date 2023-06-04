const loginHandler = async (request, h) => {
  const { username, password } = request.payload;

  if (!username || !password) {
    const response = h.response({
      status: 'fail',
      message: 'Data login tidak lengkap',
    }).code(400);
    return response;
  }

  const db = client.db('nama_database'); // Ganti dengan nama basis data Anda
  const usersCollection = db.collection('users');

  // Mencari pengguna dengan nama pengguna yang diberikan
  const user = await usersCollection.findOne({ username });

  if (user) {
    // Periksa kecocokan kata sandi
    if (password === user.password) {
      // Kata sandi cocok, proses login berhasil
      const response = h.response({
        status: 'success',
        message: 'Login berhasil',
      }).code(200);
      return response;
    }
  }

  // Jika tidak ada pengguna atau kata sandi tidak cocok
  const response = h.response({
    status: 'fail',
    message: 'Username atau password salah',
  }).code(401);
  return response;
};

module.exports = { loginHandler };
