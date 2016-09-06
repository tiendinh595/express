/**
 * Created by Dinh. Vu Tien on 9/6/2016.
 */
var express = require('express')
var router= express.Router()
var db = require('../app/config/db')

router.get('/', function (req, res, next) {
    db.query('SELECT * from posts', function(err, rows, fields) {
       return rows
    }).then(function (data) {

    });
})

router.get('/:id.html', function (req, res, next) {
    db.query('SELECT * from posts where id = '+req.params.id, function(err, rows, fields) {
        data = {
            template: 'blog/detail',
            title: 'Demo Blog Using Express',
            post: rows[0]
        }
        res.render('layouts/master', data)
    })
})

module.exports = router