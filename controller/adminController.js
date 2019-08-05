const model = require('../model')
// const session = require('express-session');
module.exports = {
    getAdminIndex(req, res) {
        res.render('admin/index');
    },
    getAdminCategories(req, res) {
        res.render('admin/categories');
    },
    getAdminComments(req, res) {
        res.render('admin/comments');
    },
    getAdminLogin(req, res) {
        res.render('admin/login');
    },
    getAdminNavMenus(req, res) {
        res.render('admin/nav-menus');
    },
    getAdminPasswordReset(req, res) {
        res.render('admin/password-reset');
    },
    getAdminPostAdd(req, res) {
        res.render('admin/post-add');
    },
    getAdminPosts(req, res) {
        res.render('admin/posts');
    },
    getAdminProfile(req, res) {
        res.render('admin/profile');
    },
    getAdminSettings(req, res) {
        res.render('admin/settings');
    },
    getAdminSlides(req, res) {
        res.render('admin/slides');
    },
    getAdminUsers(req, res) {
        res.render('admin/users');
    },
    checkLogin(req, res) {
        model.checkLogin(req.body.email, (resultObj) => {
            // console.log(resultObj.password)
            if (!resultObj) {
                res.send({ code: '404', msg: '用户名不存在' })
            } else {
                if (resultObj.password != req.body.password) {
                    res.send({ code: '404', msg: '密码错误' })
                } else {
                    req.session.isLogin = 'true'
                    res.send({ code: '200', msg: '登陆成功,点击确认进入管理员页面', id: resultObj.id })
                }
            }
        })
    }

}
