const express = require('express');
const server = express();
const session = require('express-session')  //引用session模块
server.listen(7878, () => {
    console.log('http://127.0.0.1:7878/');
});
server.use(session({
    secret: 'session-test',
    resave: false,
    saveUninitialized: false
}))
server.get('/', function (req, res) {
    if (req.session && req.session.isLogin == 'loginned') {
        res.send('已登录')  //第一次验证是否登陆过
    } else {
        req.session.isLogin = 'loginned';   //登陆
        res.send('未登录')
    }
})