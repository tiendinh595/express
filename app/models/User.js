/**
 * Created by Dinh. Vu Tien on 9/7/2016.
 */
var db = require('../config/db');
var Promise = require('promise')

module.exports = {
    login : function(username, password) {
        console.log('select * from users where username="'+username+'" and password = "'+password+'"');
        return new Promise(function(resolve, reject) {
            db.query('select * from users where username="'+username+'" and password = "'+password+'"', function (err, rows, feilds) {
                if(err || rows.length==0)
                    reject(err)
                else
                    resolve(rows[0])
            })
        })
    }
}