/* 클라이언트 요청 시 발생하는 이벤트 처리 */

const http = require('http');
const server = http.createServer();
const host = '192.168.1.2';
const port = 3000;

// 웹 서버 실행 시 호스트와 포트 지정하는 경우 
server.listen(port, host, '50000', function () {
    console.log('웹 서버 시작: %s, %d', host, port);
})