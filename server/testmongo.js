const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

async function testConnection() {
  if (!uri) {
    console.error('ERROR: MONGO_URI is not defined in your .env file.');
    process.exit(1);
  }

  try {
    console.log('Attempting to connect to MongoDB Atlas...');
    await mongoose.connect(uri);
    console.log('SUCCESS: Connected to MongoDB Atlas successfully!');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('FAILURE: Could not connect to MongoDB Atlas.');
    console.error(error.message);
    process.exit(1);
  }
}

testConnection();