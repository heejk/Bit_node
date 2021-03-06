/* 헤더/요청 파라미터 확인 */

// query: 클라이언트에서 GET 방식으로 전송한 요청 파라미터 확인
// body: 클라이언트에서 POST 방식으로 전송한 요청 파라미터 확인 (단, body-parser와 같은 외장 모듈 사용)
// header(name): 헤더 확인

let express = require('express');
let http = require('http');

var app = express();

app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    
    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write('<div><p>User-Agent: ' + userAgent + '</p></div>');
    res.write('<div><p>Param name: ' + paramName + '</p></div>');
    res.end();
})

// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})


// http://localhost:3000/?name=conan