const Book = require('../models/books');

const tesDatabaseHandler = async (request, h) => {
  try {
    await Book.insertMany([
      {
        title: 'Sons Of Anarchy',
        body: 'Body text goes here...',
      },
      {
        title: 'Games of Thrones',
        body: 'Body text goes here...',
      },
    ]);
    return h.response({ Data: 'Added' }).code(200);
  } catch (error) {
    console.log('err', error);
    return h.response({ Error: 'Something went wrong.' }).code(500);
  }
};

module.exports = { tesDatabaseHandler };
