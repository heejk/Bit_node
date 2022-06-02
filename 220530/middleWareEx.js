/* 미들웨어 만들기 */

let express = require('express');
let http = require('http');

var app = express();

/* 여러 개의 미들웨어 사용하기 */
// use() 여러 번 사용
app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    req.user = 'MiddleWare';
    next();
})

app.use('/', function (req, res, next) {
    console.log('두 번째 미들웨어에서 요청을 처리함');
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Express 서버에서 ' + req.user + ' 응답중</h1>');
})

// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})