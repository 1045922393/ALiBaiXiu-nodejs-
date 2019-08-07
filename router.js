const express = require('express');
const userController = require('./controller/userController')   //引入页面模块
const getPagesController = require('./controller/getPagesController')   //引入后台控制
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
    // .get('/admin/index.html', getPagesController.getAdminIndex)
    .get('/admin/index.html/', getPagesController.getAdminIndex)
    .get('/admin/categories.html', getPagesController.getAdminCategories)
    .get('/admin/comments.html', getPagesController.getAdminComments)
    .get('/admin/login.html', getPagesController.getAdminLogin)
    .get('/admin/nav-menus.html', getPagesController.getAdminNavMenus)
    .get('/admin/password-reset.html', getPagesController.getAdminPasswordReset)
    .get('/admin/post-add.html', getPagesController.getAdminPostAdd)
    .get('/admin/posts.html', getPagesController.getAdminPosts)
    .get('/admin/profile.html', getPagesController.getAdminProfile)
    .get('/admin/settings.html', getPagesController.getAdminSettings)
    .get('/admin/slides.html', getPagesController.getAdminSlides)
    .get('/admin/users.html', getPagesController.getAdminUsers)
    .post('/checkLogin', adminController.checkLogin)
    .get('/getAllArticle', adminController.getAllArticle)
module.exports = router;