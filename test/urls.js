const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const koaBody = require('koa-body');

//index页面配置
var url_index = require('../index/url_index');
app.use(route.get('/', url_index));

//about页面配置
var url_about = require('../about/url_about');
app.use(route.get('/about', url_about));

//xmd_exc页面配置
var url_xmdexc = require('../xmd_exc/url_xmdexc');
app.use(route.get('/xmd-to-exc', url_xmdexc));


//保存文件
var url_savefile = require('../xmd_exc/views');
app.use(url_savefile);

app.use(koaBody({ multipart: true }));

app.listen(3000);
console.log('app started at port 3000...');