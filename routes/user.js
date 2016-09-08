/**
 * Created by Dinh. Vu Tien on 9/7/2016.
 */
var express = require('express')
var router = express.Router()
var controller = require('../app/controllers/UserController')
var auth = require('../app/middleware/auth')

//get routes
router.get('/login', function (req, res, next) {
    res.render('user/login')
})

router.post('/login', function(req, res, next) {
    controller.login(req.body.username, req.body.password).then(function (rows) {
        req.session.is_login = true;
        res.end("login seccess")
    }).catch(function(e) {
        console.log('errrrrr', e)
        res.redirect('/user/login')
    })
})

router.get('/profile', auth.isLogin, function (req, res, next) {
    res.end("<h1>PROFILE</h1>")
})
//export module
module.exports = router
