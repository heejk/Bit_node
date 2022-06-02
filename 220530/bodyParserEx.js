/* body-parser */
// POST로 요청했을 때의 요청 파라미터 확인 방법 제공

let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser'), static = require('serve-static');

let app = express();

app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

app.use(static(path.join(__dirname, 'public')));

// 미들웨어에서 파라미터 확인
app.use(function (req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    
    var paramUserId = req.body.id || req.query.id;
    var paramUserPw = req.body.pw || req.query.pw;
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write('<div><p>Param id: ' + paramUserId + '</p></div>');
    res.write('<div><p>Param pw: ' + paramUserPw + '</p></div>');
    res.end();
})


// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})

