const Koa = require('koa');
const app = new Koa();

//(x) => x+6	等价于
//function(x){
//    return x+6;
//};
const main = ctx => {
	ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);
console.log('app started at port 3000...');
//上面代码中，main函数用来设置ctx.response.body
//使用app.use方法加载main函数。
