module.exports = function (app) {
    // app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，
    // 在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
    // 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
    // request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
    // res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容
    app.get('/', function (req, res) {
        res.render('index', { 
            title: '花镜美优官网',
            pic_list: [{
                name: "吸血鬼日记--埃琳娜·吉尔伯特",
                _id: 1,
                url: "/source/img/aa1.jpg"
            },{
                name: "吸血鬼日记--卡罗琳·福布斯",
                _id: 5,
                url: "/source/img/bb1.jpg"
            },{
                name: "吸血鬼日记--邦妮",
                _id: 3,
                url: "/source/img/cc1.jpg"
            },{
                name: "吸血鬼日记--达蒙",
                _id: 4,
                url: "/source/img/dd1.jpg"
            },{
                name: "吸血鬼日记--斯特凡",
                _id: 5,
                url: "source/img/ee1.jpg"
            },{
                name:"吸血鬼日记--马特",
                _id: 6,
                url:"/source/img/ff1.jpg"
            },{
               name: "吸血鬼日记--泰勒",
                _id: 7,
                url: "/source/img/gg1.jpg" 
            },{
               name: "吸血鬼日记--克劳斯",
                _id: 8,
                url: "/source/img/hh1.jpg" 
            },{
                name: "吸血鬼日记--以利亚",
                _id: 9,
                url: "/source/img/ii1.jpg"
            },{
                name: "吸血鬼日记--丽贝卡",
                _id: 10,
                url: "/source/img/jj1.jpg"
            },{
                name: "吸血鬼日记--杰里米",
                _id: 11,
                url: "/source/img/kk1.jpg"
            },{
                name: "吸血鬼日记--阿拉里克",
                _id: 12,
                url: "/source/img/jj1.jpg"
            },{
                name: "吸血鬼日记--安娜",
                _id: 13,
                url: "/source/img/mm1.jpg"
            }]
        });
    });
}
