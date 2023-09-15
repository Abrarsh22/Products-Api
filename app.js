require('dotenv').config();
const express = require("express");
const app = express();
const connection=require('./db/connect');

const products_routes = require('./routes/products_router')
app.get('/',(req,res)=>{
    res.send('Hi,I am Live')
})
app.use("/api/products",products_routes)
const PORT = process.env.PORT || 5000;

const start = async ()=>{
    try{
        await connection(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} is connected`)
        })
    }catch(error){
        console.log(error)

    }
}

start();