const Class = require('../models/classes');

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
