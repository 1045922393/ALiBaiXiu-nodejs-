const mysql = require('mysql');
let connect = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'albx',
    dateStrings: true
});
// let sql = `select * from users`;
// connect.query(sql, (err, result, filed) => {
//     if (err) console.log(err);
//     console.log(result);
// })
// connect.connect();
module.exports = {
    checkLogin(dataEmail, callback) {
        let sql = `select * from users where email = '${dataEmail}'`;
        connect.query(sql, (err, result, filed) => {
            if (err) console.log(err);
            // console.log(result);
            callback(result[0]);
        })
    },
    getAllArticle(obj, callback) {
        let sql = `select posts.id,posts.title,users.nickname,categories.name,posts.created,posts.status 
                    from posts 
                    inner join users on posts.user_id = users.id
                    inner join categories on posts.category_id = categories.id
                    order by id DESC
                    limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;
        connect.query(sql, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        })
    }
}
