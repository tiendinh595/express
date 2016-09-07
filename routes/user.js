/**
 * Created by Dinh. Vu Tien on 9/7/2016.
 */
var express = require('express')
var router = express.Router()
var controller = require('../app/controllers/UserController')

//get routes
router.get('/login', function (req, res, next) {
    res.render('user/login')
})

router.post('/login', function(req, res, next) {
    controller.login(req.body.username, req.body.password).then(function (rows) {
        console.log("success:", rows)
        res.send("login success")
    }).catch(function(e) {
        res.redirect('/user/login')
    })
})
//export module
module.exports = router
