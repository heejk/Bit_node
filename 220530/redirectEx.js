/* 다른 페이지로 이동하기 */

let express = require('express');
let http = require('http');

var app = express();

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    res.redirect('http://google.co.kr');
})

// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})