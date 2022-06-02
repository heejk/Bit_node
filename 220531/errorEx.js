/* 에러 페이지 */

let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser'), static = require('serve-static');
let expressSession = require('express-session');
let expressErrorHandler = require('express-error-handler');

let app = express();
let router = express.Router();

// 로그인 시 세션 처리
router.route('/process/login').post(function (req, res) {
    console.log('/process/login 호출');
    
    let paramUserId = req.body.id || req.query.id;
    let paramUserPw = req.body.pw || req.query.pw;

    if (req.session.uesr) { // 이미 로그인 되어 세션이 저장된 상태
        console.log('이미 로그인이 되어 상품 페이지로 이동합니다');
        res.redirect('/product.html');
    } else {
        req.session.user = {
            id: paramUserId,
            name: '코난',
            authorized: true
        }
        res.writeHead('200', { 'Content-Type': 'text/html;charset=utf-8' });
        res.write('<h1>로그인 성공</h1>');
        res.write('<div><p>Param id: ' + paramUserId + '</p></div>');
        res.write('<div><p>Param pw: ' + paramUserPw + '</p></div>');
        res.write("<br><br><a href='/process/product'>상품 페이지로 이동하기</a>");
        res.end();
    }
})

// 로그아웃 시 세션 처리
router.route('process/logout').get(function (req, res) {
    console.log('/process/logout 호출');
    
    if (req.session.user) { // 로그인 상태
        console.log('로그아웃');
        req.session.destroy(function (err) { // destroy: 세션 삭제 
            if (err)
                throw err;
            console.log('세션 삭제 후 로그아웃 완료');
            res.redirect('/login.html')
        })
    } else { // 로그인 안된 상태
        console.log('아직 로그인이 되어있지 않음');
        res.redirect('/login.html');
    }
})

// 상품 정보 확인 페이지에서 세션 정보 확인
router.route('/process/product').get(function (req, res) {
    console.log('/process/product 호출');

    if (req.session.user)
        res.redirect('/product.html');
    else
        res.redirect('/login.html');
})

// 404 에러 페이지 처리
let errorHandler = expressErrorHandler({
    static: { '404': __dirname + '/public/404.html' }
})

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

app.set('port', process.env.PORT || 3000);

// 세션 설정 
app.use(expressSession({
    secret: 'my key',           // 쿠키를 임의로 변조하는 것을 방지하기 위한 값
    resave: true,               // 세션을 항상 저장하지 여부 결정 (false 권장)  
    saveUninitialized: true     // 세션이 저장되기 전에 uninitialzed 상태로 미리 만들어서 저장
}))

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

// 라우터 객체를 app 객체에 등록
app.use('/', router);


// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})

