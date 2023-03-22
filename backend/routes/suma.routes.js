
const router = require('express').Router()

const {postSuma} = require('../controllers/suma.controller')

router.post("/Suma",postSuma)

module.exports = router