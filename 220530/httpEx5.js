/* 다른 웹 사이트의 데이터 가져오기2 */
// POST 방식으로 요청할 때는 request() 메소드 사용

let http = require('http');
let server = http.createServer();
let options = {
    host: 'www.google.com',
    port: 80,
    method: 'POST',
    path: '/',
    Headers: {}
} 

let resData = '';
let req = http.request(options, function (res) {
    // 응답 처리
    res.on('data', function (chunk) {
        resData += chunk;
    })
    res.on('end', function () {
        console.log(resData);
    })
})

// POST 방식으로 요청 시 헤더 작성 필요
options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = 'q=actor';
options.headers['Content-Length'] = req.data.length;

req.on('error', function (err) {
    console.log('오류 발생' + err.message);
})

// 요청 전송
req.write(req.data);
req.end();