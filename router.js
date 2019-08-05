const express = require('express');
const userController = require('./controller/userController')   //引入控制模块
const adminController = require('./controller/adminController')   //引入控制模块
const router = express.Router();
// router.use('/assets', express.static('assets'));            //托管静态资源管理
// router.use('/uploads', express.static('uploads'));
// router.get('/', userController.getIndex)                    //处理监听
// router.get('/index.html', userController.getIndex)                    //处理监听
// router.get('/list.html', userController.getList)                    //处理监听
// router.get('/detail.html', userController.getDetail)                    //处理监听

router.use('/assets', express.static('assets'))            //托管静态资源管理
    .use('/uploads', express.static('uploads'))
    .get('/', userController.getIndex)                    //处理监听
    .get('/index.html', userController.getIndex)                    //处理监听
    // .get('/index.html', userController.getIndex)                    //处理监听
    .get('/list.html', userController.getList)                    //处理监听
    .get('/detail.html', userController.getDetail)                    //处理监听
    // .get('/admin/index.html', adminController.getAdminIndex)
    .get('/admin/index.html/', adminController.getAdminIndex)
    .get('/admin/categories.html', adminController.getAdminCategories)
    .get('/admin/comments.html', adminController.getAdminComments)
    .get('/admin/login.html', adminController.getAdminLogin)
    .get('/admin/nav-menus.html', adminController.getAdminNavMenus)
    .get('/admin/password-reset.html', adminController.getAdminPasswordReset)
    .get('/admin/post-add.html', adminController.getAdminPostAdd)
    .get('/admin/posts.html', adminController.getAdminPosts)
    .get('/admin/profile.html', adminController.getAdminProfile)
    .get('/admin/settings.html', adminController.getAdminSettings)
    .get('/admin/slides.html', adminController.getAdminSlides)
    .get('/admin/users.html', adminController.getAdminUsers)
    .post('/checkLogin', adminController.checkLogin)

module.exports = router;