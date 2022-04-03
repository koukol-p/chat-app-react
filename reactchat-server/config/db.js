const mongoose = require("mongoose");
const connect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected: ", connection.connection.host);
  } catch (err) {
    console.log("MongoDB error: ", err.message);
  }
};
module.exports = connect;
