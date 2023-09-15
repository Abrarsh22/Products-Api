const mongoose = require('mongoose')

const connection = (uri) =>{
    return  mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}

module.exports = connection;