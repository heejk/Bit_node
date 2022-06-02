/* http 모듈로 웹 서버 시작 */

var http = require('http');
var server = http.createServer();
var port = 3000;

server.listen(port, function () { // listen(): 서버를 실행하여 대기 
    console.log('웹 서버 시작: %d', port);
})