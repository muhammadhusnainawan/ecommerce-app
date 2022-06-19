const colors = require("colors");
const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connec = await mongoose.connect(process.env.MONGO_URI, 
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    //   useCreateIndex: true,
    );
    console.log(`db connected successfully ${connec.connection.host}`.underline.green);
  } catch (error) {
    console.error(`Error  : ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDb;
