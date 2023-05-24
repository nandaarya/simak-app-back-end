// const classes = require('../classes');
const Class = require('../models/classes');

// const getAllClassesHandler = () => ({
//   status: 'success',
//   data: {
//     classes,
//   },
// });

// try {
//   const books = await Book.find();
//   return h.response(books).code(200);
// } catch (error) {
//   console.log('err', error);
//   return h.response({ Error: 'Something went wrong.' }).code(500);
// }

const getAllClassesHandler = async () => {
  try {
    const classes = await Class.find();
    return {
      status: 'success',
      data: {
        classes,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: error,
    };
  }
};

module.exports = { getAllClassesHandler };
