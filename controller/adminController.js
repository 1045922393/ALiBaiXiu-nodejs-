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
}
