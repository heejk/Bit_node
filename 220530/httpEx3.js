/* connection 이벤트와 request 이벤트 처리 */

const http = require('http');
const server = http.createServer();
const port = 3000;

server.listen(port, function () { 
    console.log('웹 서버 시작: %d', port);
})

server.on('connection', function (socket) {
    const addr = socket.address();
    console.log('클라이언트가 접속: %s, %d', addr.address, addr.port);
})

server.on('request', function (req, res) {
    console.log('클라이언트가 요청함');
    //console.dir(req);

    /* 클라이언트에게 응답 보내기 */
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write("<!DOCKTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>응답 페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Node.js 응답 페이지</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();

})