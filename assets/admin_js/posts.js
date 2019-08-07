$(function () {
    $.ajax({
        type: 'get',
        url: '/getAllArticle',
        data: { pageNum: 1, pageSize: 4 },
        success: (response) => {
            console.log(response)
            let html = template('allArticleTemplate', response)
            // console.log(html)
            $('tbody').html(html)
        }
    })
})