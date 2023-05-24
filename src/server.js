const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

server.route(routes);

// Connect to the database before starting the server
connectDB().then(() => {
  server.start().then(() => {
    console.log('Server running at:', server.info.uri);
  }).catch((err) => {
    console.log(err);
    process.exit(1);
  });
});
