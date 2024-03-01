const mongoose = require("mongoose")

const Schema = mongoose.Schema

const livroSchema = new Schema({
    nomeLivro:{
        type:String,
        required:true
    },
    quantidadePag:{
        type:String,
        required:false
    },
    genero:{
        type:String, 
        required:false
    },
    imgUrl:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("livros", livroSchema)