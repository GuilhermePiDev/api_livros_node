const livroModel = require("../models/livroModel")

exposts.postzinho = (req,res,next) =>{
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
} 