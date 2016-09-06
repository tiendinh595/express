/**
 * Created by Dinh. Vu Tien on 9/6/2016.
 */
var express = require('express')
var router = express.Router()
var controller = require('../app/controllers/BlogController')
var model = require('../app/models/Blog')
var db = require('../app/config/db')
//get routes
router.get('/', function (req, res, next) {
    controller.getAll().then(function (rows) {
        data = {
            template: 'index',
            title: 'Demo Blog Using Express',
            list_post: rows
        }
        res.render('layouts/master', data)
    })
})
//export module
module.exports = router