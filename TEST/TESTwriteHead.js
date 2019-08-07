const express = require('express');
const server = express();
// server.set('view engine', 'ejs')
server.set('views', '../views')
server.listen(7777, '127.0.0.1', function () {
    console.log('http://127.0.0.1:7777/');
})
server.use(express.static('../TEST'))

server.get('/admin/admin/admin/index.html', function (req, res) {
    res.render('./index.ejs')
    // if (req.headers.cookie) {
    //     console.log(req.headers.cookie)
    //     res.send('第二次')

    // } 
    // else {
    // res.setHeader(               //res.set('name','value)    如果多个    res.set({'name':'value','name':'value'})
    //     'Content-Type', 'text/html;charset=utf-8'
    //     // 'Set-Cookie': 'isLogin=true'
    // );
    // res.writeHead(301,               //res.set('name','value)    如果多个    res.set({'name':'value','name':'value'})
    //     { 'Location': 'www.baidu.com' }     //已经不需要res.end()响应数据了
    //     // 'Content-Type', 'text/html;charset=utf-8'
    // );
    // res.end()


    // res.send('<htm>哈啊哈哈</htm>')
    // res.end('第一次');
    // }
})