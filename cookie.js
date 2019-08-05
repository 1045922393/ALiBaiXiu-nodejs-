const express = require('express');
const server = express();
server.listen(7777, '127.0.0.1', function () {
    console.log('http://127.0.0.1:7777/');
})
server.get('/', function (req, res) {

    if (req.headers.cookie) {
        console.log(req.headers.cookie)
        res.send('第二次')

    } else {
        res.setHeader(               //res.set('name','value)    如果多个    res.set({'name':'value','name':'value'})
            'Content-Type', 'text/html;charset=utf-8'
            // 'Set-Cookie': 'isLogin=true'
        );
        res.setHeader(               //res.set('name','value)    如果多个    res.set({'name':'value','name':'value'})
            // 'Content-Type', 'text/html;charset=utf-8'
            'Set-Cookie', 'isLogin=true'
        );
        // res.send('<htm>哈啊哈哈</htm>')
        res.end('第一次');
    }
})