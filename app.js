const express = require('express'); //引入express模块
const app = express();              //创建服务器
const bodyParse = require('body-parser');
const router = require('./router');         //引入router模块
const session = require('express-session');
app.listen(8888, '127.0.0.1', () => {           //绑定监听
    console.log('http://127.0.0.1:8888/')
});
app.set('view engine', 'ejs');          //设置默认模块
app.set('views', './views');              //设置ejs寻找路径
app.use(bodyParse.urlencoded({ extended: false }));
app.use(session({       //加盐
    'secret': 'albx',
    'resave': false,
    // 'saveUniitialized': false
    'saveUninitialized': false

}))
app.use(function (req, res, next) {
    if (req.session && req.session.isLogin == 'true' || req.url == '/admin/login.html' || !req.url.startsWith('/admin')) {
        next();
    } else {
        res.redirect('/admin/login.html')
    }
})
app.use(router)
