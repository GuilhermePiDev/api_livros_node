const express = require("express")

const router = express.Router()
const livroController = require("../controllers/livroController")

router.post("/postizin", livroController.postzinho)

module.exports = router;