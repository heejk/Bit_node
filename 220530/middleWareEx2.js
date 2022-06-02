/* 요청 객체와 응답 객체 */

let express = require('express');
let http = require('http');

var app = express();

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    res.send({ name: 'conan', age: 10 }); // send(): 클라이언트에 응답 데이터 전송
})

// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})