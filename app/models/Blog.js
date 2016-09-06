/**
 * Created by Dinh. Vu Tien on 9/6/2016.
 */
var db = require('../config/db')
var Promise = require('promise');
module.exports = {
    getAllPost: function () {
        return new Promise(function (resolve, reject) {
            db.query('SELECT * from posts', function(err, rows, fields) {
                if(err)
                    reject(err)
               resolve(rows);
            });
        })
    }
}