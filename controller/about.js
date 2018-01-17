const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const index = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = fs.createReadStream('../html/about.html');
};

module.exports = index;