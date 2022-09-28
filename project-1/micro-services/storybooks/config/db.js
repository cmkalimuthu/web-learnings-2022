const mongoose = require("mongoose");
const connectDB = async () => {
  const dbURI = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
