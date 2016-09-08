/**
 * Created by Dinh. Vu Tien on 9/7/2016.
 */
var model = require('../models/User')
var md5 = require('md5')

module.exports = {
    login: function (username, password) {
        console.log("passss",md5(password))
        return model.login(username, md5(password));
    }
}