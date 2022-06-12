const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const users = require("./data/users");
const User = require("./modals/UserModel");
const products = require("./data/products");
const Product = require("./modals/ProductModel");
const connectDb = require("./config/config");

dotenv.config();
connectDb();

const imporData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, user: adminUser };
    });
    console.log(`${sampleData}`.yellow.inverse);
    await Product.insertMany(sampleData);
    console.log("data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    console.log("data destroyed".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  imporData();
}
