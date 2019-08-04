const mysql = require('mysql');
let connect = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'albx'
});
// let sql = `select * from users`;
// connect.query(sql, (err, result, filed) => {
//     if (err) console.log(err);
//     console.log(result);
// })
// connect.connect();
module.exports = {
    checkLogin(callback) {
        let sql = `select * from users`;
        connect.query(sql, (err, result, filed) => {
            if (err) console.log(err);
            // console.log(result);
            callback(result);
        })
    }
}
