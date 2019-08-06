const model = require('../model/admin_model');
module.exports = {
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
