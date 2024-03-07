const livroModel = require("../models/livroModel")
const { validationResult } = require("express-validator");


exports.getBooks = (req, res, next) => {
    
    livroModel.find()
        .then(result => {
            res.status(200).json({
                livros: result
            })
        })
        .catch(error => {
            console.log(error);
        })

}
exports.postBook = (req,res,next) =>{
  

    const nomeLivro = req.body.nomeLivro;
    const quantidadePag = req.body.quantidadePag;
    const genero = req.body.genero;
    const imageUrl = req.body.imageUrl;

    
  
    const newLivro = new livroModel(
        {
            nomeLivro:nomeLivro,
            quantidadePag:quantidadePag,
            genero:genero,
            imgUrl:imageUrl
        }
     
    )
        
    
    newLivro.save()
    .then(result => {
        res.status(201).json({
            error: false,
            message: "Livro salvo",
            result: result
        })
    }).catch(error => {
        res.status(500).json({
            error: false,
            message: "Livro não salvo",
            result: error
        })
    })
} 