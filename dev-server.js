//-->> Created by pipu on 2017/5/8.
var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//   思路就是引入 node 的 fs 模块，调用同步读取文件的函数，
// 然后传入 js 的 JSON.parse() 函数，得到的 project 对象或对象数组，
// 接着就可以用 project.MAX_CONNECTIONS 的语法操作 json 里的配置项，over。
var appData = JSON.parse(fs.readFileSync(path.join(__dirname,'data.json'), 'utf8'));

var seller = appData.seller; // 卖家数据
var goods = appData.goods; // 商品数据
var ratings = appData.ratings; // 评分数据

var apiRoutes = express.Router(); // 路由对象

// 定义路由
// 卖家路由
apiRoutes.get('/seller', function (req, res) {
	res.json({
		errno: 0, // 返回的状态码
		data: seller
	});
});
// 商品路由
apiRoutes.get('/goods', function (req, res) {
	res.json({
		errno: 0, // 返回的状态码
		data: goods
	});
});
// 评分路由
apiRoutes.get('/ratings', function (req, res) {
	res.json({
		errno: 0, // 返回的状态码
		data: ratings
	});
});
// 用express框架使用该路由
app.use('/api',apiRoutes);
var port = 3000
var server = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n');
});

