const express = require("express")

const router = express.Router()
const livroController = require("../controllers/livroController")

router.post("/post", livroController.postBook);

router.get("/books", livroController.getBooks)

module.exports = router;