/* eslint-disable camelcase */
const User = require('../models/users');

const addUserHandler = async (request, h) => {
  const {
    username, password, email, name, nim_nip, role,
  } = request.payload;

  if (!username || !password || !email || !name || !nim_nip || !role) {
    const response = h.response({
      status: 'fail',
      message: 'Data user tidak lengkap',
    }).code(400);
    return response;
  }

  // Mengecek apakah sudah ada akun dengan username atau email yang sama
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    const response = h.response({
      status: 'fail',
      message: 'Username atau email sudah digunakan',
    }).code(409);
    return response;
  }

  const newUser = new User({
    username, password, email, name, nim_nip, role,
  });

  try {
    await newUser.save();
    const response = h.response({
      status: 'success',
      message: 'Pendaftaran User Berhasil',
    });
    response.code(201);
    return response;
  } catch (error) {
    console.log('err', error);
    const response = h.response({
      status: 'fail',
      message: `Pendaftaran user karena ${error}`,
    });
    response.code(500);
    return response;
  }
};

module.exports = { addUserHandler };
