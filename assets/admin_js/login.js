let form = document.querySelector('.login-wrap');
$('.btn-block').on('click', function (event) {
    event.preventDefault();
    // if (!$('#email').val().trim()) {
    if (!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test($('#email').val()))) {
        alert('请填入正确邮箱');
        return;
    };
    if (!$('#password').val().trim()) {
        alert('请输入密码');
        return;
    };
    let data = {
        email: $('#email').val(),
        password: $('#password').val()
    }
    // console.log(data)
    $.ajax({
        type: 'post',
        data,
        url: 'http://127.0.0.1:8888/checkLogin',
        success: (response) => {
            switch (response.code) {
                case '404':       //404定义为邮箱名错误
                    alert(response.msg);
                    break;
                case '405':       //405定义为密码错误
                    alert(response.msg);
                    break;
                case '200':       //200定义为验证成功
                    alert(response.msg);
                    location.href = "http://127.0.0.1:8888/index.html?id=" + response.id;
                    break;
                default:
                    alert('出现不名错误')
            }
        }
    })
})