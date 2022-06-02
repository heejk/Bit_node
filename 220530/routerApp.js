/* Router */

let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser'), static = require('serve-static');

let app = express();
let router = express.Router();

// 라우팅 함수 등록
router.route('/process/login/:name').post(function (req, res) {
    console.log('/process/login/:name 처리함');
    var paramName = req.params.name;
    
    var paramUserId = req.body.id || req.query.id;
    var paramUserPw = req.body.pw || req.query.pw;
    res.writeHead('200', { 'Content-Type': 'text/html;charset=utf-8' });
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write('<div><p>Param name: ' + paramName + '</p></div>');
    res.write('<div><p>Param id: ' + paramUserId + '</p></div>');
    res.write('<div><p>Param pw: ' + paramUserPw + '</p></div>');
    res.write("<br><br><a href='/login.html'>로그인 페이지로 돌아가기</a>");
    res.end();
})

app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

app.use(static(path.join(__dirname, 'process')));

// 라우터 객체를 app 객체에 등록
app.use('/', router);


// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})

