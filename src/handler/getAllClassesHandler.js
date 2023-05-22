const classes = require('../classes');

const getAllClassesHandler = () => ({
  status: 'success',
  data: {
    classes,
  },
});

module.exports = { getAllClassesHandler };
