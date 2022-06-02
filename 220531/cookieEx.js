/* Cookie */

let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser'), static = require('serve-static');
let cookieParser = require('cookie-parser');
// >> npm install cookie-parser --save

let app = express();
let router = express.Router();

// showCookie 요청 경로에서 쿠키 정보 표시
router.route('/process/setUserCookie').get(function (req, res) {
    console.log('/process/setUserCookie 호출');
    // 쿠키 설정 (응답 객체의 cookie 메소드 호출)
    res.cookie('user', {
        id: 'conan',
        name: '코난',    
        authorized: true
    })

    // redirect로 응답
    res.redirect('/process/showCookie');
})

router.route('process/showCookie').get(function (req, res) {
    console.log('/process/showCookie 호출');
    res.send(req.cookies);
})

app.set('port', process.env.PORT || 3000);

app.use(cookieParser);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'process')));

// 라우터 객체를 app 객체에 등록
app.use('/', router);


// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})

