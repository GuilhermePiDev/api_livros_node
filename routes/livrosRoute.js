const express = require("express")

const router = express.Router()
const livroController = require("../controllers/livroController")

router.post("post", livroController.postzinho)