const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const xmd_exc = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = fs.createReadStream('../html/xmd_exc.html');
};

module.exports = xmd_exc;
