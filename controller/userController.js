let userController = {
    getIndex(req, res) {
        res.render('index')
    },
    getDetail(req, res) {
        res.render('detail')
    },
    getList(req, res) {
        res.render('list')
    },
}
module.exports = userController