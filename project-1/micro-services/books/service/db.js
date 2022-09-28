var mongoose = require("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = {
  init: async () => {
    const url = process.env.MONGO_URI;
    mongoose
      .connect(url, connectionParams)
      .then((con) => {
        console.log("db connected" + con.connection.host);
      })
      .catch((e) => {
        console.error("error occured while connecting to mongoDB " + e);
      });
  },
};
