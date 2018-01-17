const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');

//index页面配置
var index = require('../controller/index');
app.use(route.get('/', index));

//about页面配置
var about = require('../controller/about');
app.use(route.get('/about', about));

//xmd_exc页面配置
var xmd_exc = require('../controller/xmd_exc');
app.use(route.get('/xmd-to-exc', xmd_exc));

app.listen(3000);
console.log('app started at port 3000...');