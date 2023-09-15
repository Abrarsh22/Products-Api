require("dotenv").config();
const connectDB = require('./db/connect');
const product_model = require('./model/productModel');
const productJson = require('./products.json');

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await product_model.deleteMany();
        await product_model.create(productJson);
        console.log("Data Inserted");
    } catch (error) {
        console.log(error);
    }
}
start();