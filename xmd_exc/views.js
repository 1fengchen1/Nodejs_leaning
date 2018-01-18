const os = require('os');
const path = require('path');
const koaBody = require('koa-body');
const moment = require('moment');
const xmind2excel =require("./xmd_esc");


const savefile = async function(ctx, next) {
  // ignore non-POSTs
  if ('POST' != ctx.method) return await next();

  const file = ctx.request.body.files.file;
  console.log(file);
  const reader = fs.createReadStream(file.path);
  console.log(reader);
  name = file.name.substr(0,file.name.length-6) + moment(new Date).format("(YYYY-MM-DD#HHmmss)")
  console.log(name);
  var xmindFile =  path.join(__dirname, '/public/xmind', name + '.xmind')
  console.log(xmindFile);
  const stream = fs.createWriteStream(xmindFile);
  console.log(stream);
  reader.pipe(stream);
  console.log('uploading %s -> %s', file.name, stream.path);
  fileName = name + '.xlsx'
  var excelFile = path.join(__dirname, '/public/excel', fileName)
  console.log(excelFile)
  await reader.on('end', await async function () {
    let result = xmind2excel.x2e(xmindFile, excelFile)
    console.log('RESULT:' + result)
    ctx.attachment(fileName);
    await send(ctx, fileName, { root: __dirname + '/public/excel' });
  });
  //await sleep(15000)
};

module.exports = savefile;
