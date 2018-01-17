const Koa = require('koa');
const app = new Koa();
const fs = require('fs')

//(x) => x+6	等价于
//function(x){
//    return x+6;
//};
const main = ctx => {
	if (ctx.request.accepts('xml')){
		ctx.response.type = 'xml';
		ctx.response.body = '<data>Hello World</data>';
	} else if (ctx.request.accepts('json')){
		ctx.response.type = 'json';
		ctx.response.body = {data: 'Hello World'};
	} else if (ctx.request.acceptes('html')){
		ctx.response.type = 'html';
		ctx.response.body = '<p>Hello World</p>';
	} else {
		ctx.response.type = 'text';
		ctx.response.body = 'Hello World';
	}
};

app.use(main);
app.listen(3000);
console.log('app started at port 3000...');
//上面代码中，main函数用来设置ctx.response.body
//使用app.use方法加载main函数。
