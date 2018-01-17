// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
//监听3000端口
app.listen(3000);