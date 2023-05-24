const Book = require('../models/books');

const getBooksHandler = async (request, h) => {
  try {
    const books = await Book.find();
    return h.response(books).code(200);
  } catch (error) {
    console.log('err', error);
    return h.response({ Error: 'Something went wrong.' }).code(500);
  }
};

module.exports = { getBooksHandler };
