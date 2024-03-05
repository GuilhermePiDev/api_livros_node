const mongoose = require("mongoose")

const Schema = mongoose.Schema

const livroSchema = new Schema({
    nomeLivro:{
        type:String,
        required:false
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
        required:false
    }
})

module.exports = mongoose.model("Livro", livroSchema)