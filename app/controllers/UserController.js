/**
 * Created by Dinh. Vu Tien on 9/7/2016.
 */
var model = require('../models/User')
var crypto = require('crypto-js');

module.exports = {
    login: function (username, password) {
        password = crypto.AES.encrypt(password, 'tiendinh').toString();
        return model.login(username, crypto.AES.encrypt(password, 'tiendinh').toString());
    }
}