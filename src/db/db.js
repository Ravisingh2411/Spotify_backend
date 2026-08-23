const momgoose = require('mongoose');

async function connectDB() {
  try {
    await momgoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectDB;