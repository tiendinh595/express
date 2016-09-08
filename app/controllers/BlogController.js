/**
 * Created by Dinh. Vu Tien on 9/6/2016.
 */
var model = require('../models/Blog')

module.exports = {
    index: function (req, res, next) {
        model.getAllPost().then(function (rows) {
            data = {
                template: 'index',
                title: 'Demo Blog Using Express',
                list_post: rows
            }
            res.render('layouts/master', data)
        })
    }
}