/**
 * Created by Dinh. Vu Tien on 9/6/2016.
 */
var express = require('express')
var router = express.Router()
var controller = require('../app/controllers/BlogController')

//get routes
router.get('/', controller.index)

//export module
module.exports = router