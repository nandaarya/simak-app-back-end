const Book = require('../models/books');

const addBookHandler = async (request, h) => {
  try {
    const { title, body } = request.payload;
    const newBook = new Book({ title, body });
    await newBook.save();
    return h.response({ Data: 'Added' }).code(200);
  } catch (error) {
    console.log('err', error);
    return h.response({ Error: 'Something went wrong.' }).code(500);
  }
};

module.exports = { addBookHandler };
