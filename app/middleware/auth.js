/**
 * Created by Dinh. Vu Tien on 9/7/2016.
 */
module.exports = {
    isLogin : function(req, res, next) {
        if(!req.session.is_login)
            res.redirect('/user/login')
        next();
    }
}