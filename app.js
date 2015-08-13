var express = require('express')
var path = require('path')
var port = process.env.PORT || 3009
var app = express()


// app.set("view","./view/pages")
app.set('views', __dirname + '/views/pages');
app.set('view engine','ejs')
//如果不愿意使用默认的layout.ejs，则可以设置layout为false
app.set('view options',{
    "layout":false,
})

//静态资源使用目录
app.use('/source', express.static(__dirname+'/source'));

//首页
// app.get('/',function(request,response){
//     response.render('index',{
//         "title":"花镜首页"
//     })
// })
app.listen(port,function(){
    console.log("==========================");
    console.log("开始启动:" + 'http://127.0.0.1:' +port);
})


var index = require('./routes/index'),
    admin = require('./routes/admin'),
    other = require('./routes/other');

    index(app);//预览页面
    admin(app);//管理平台
    other(app);//放其它内容 比如 404

// app.get()
module.exports = app