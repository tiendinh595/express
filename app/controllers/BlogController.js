/**
 * Created by Dinh. Vu Tien on 9/6/2016.
 */
var model = require('../models/Blog')

module.exports = {
    getAll: function () {
        return model.getAllPost();
    }
}