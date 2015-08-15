var cheerio = require('cheerio');
var superagent = require('superagent');


module.exports = function (app) {
    app.get('/tool/reptile', function (req, res) {
        //简单爬虫
        //superagent 抓取网页、 cheerio 分析网页
        superagent.get('https://cnodejs.org/').end(function (err, sres) {
            if (err) return next(err);
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                  title: $element.attr('title'),
                  href: $element.attr('href')
                });
            });

            res.send(items);
        });
    });

    //这个要放到最下面
    app.get('/*', function (req, res) {
        res.render('list', { 
            title: '图片列表页',
            pic_list: [{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 1,
                url: "/source/img/a1.jpg"
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 5,
                url: "/source/img/a2.jpg"
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 3,
                url: "/source/img/a3.jpg"
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 4,
                url: "/source/img/a4.jpg"
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 5,
                url: "/source/img/a5.jpg"
            },{
                name:"吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 6,
                url:"/source/img/a6.jpg"
            },{
               name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 7,
                url: "/source/img/a7.jpg" 
            },{
               name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 8,
                url: "/source/img/a8.jpg" 
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 9,
                url: "/source/img/a9.jpg"
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 10,
                url: "/source/img/a10.jpg"
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 11,
                url: "/source/img/a11.jpg"
            },{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 12,
                url: "/source/img/a12.jpg"
            }]
        });
    });
}
