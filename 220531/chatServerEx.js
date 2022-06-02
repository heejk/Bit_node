/* Socket.IO */

let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser'), static = require('serve-static');

let socketio = require('socket.io');
let cors = require('cors');

let app = express();

app.set('port', process.env.PORT || 3000);

// public 폴더 오픈
app.use(static(path.join(__dirname, "public")));

// cors를 미들웨어로 사용하도록 등록
app.use(cors());

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

/* 서버 시작 후 socket.io로 처리하도록 listen() 메소드 호출 */
// 시작된 서버 객체 반환
let server = app.listen(app.get('port'), function() { 
    console.log('Server Start Port: ' + app.get('port'));
})

// socket.io 서버 시작
let io = socketio(server);
console.log('socket.io 요청 대기중');

/* 서버 동작 방식 */
// 클라이언트가 연결했을 때의 이벤트 처리
io.sockets.on('connection', function (socket) {
    console.log('connection info: ' + socket.request.connection._peername);
    
    // 소켓 객체에 클라이언트 Host, Port 정보 속성으로 추가
    socket.remoteAddress = socket.request.connection._peername.address;
    socket.remotePort = socket.request.connection._peername.port;

    // 'message' 이벤트를 받았을 때 처리
    socket.on('message', function (message) {
        console.log('message 이벤트 받음');
        console.dir(message);

        if (message.recepient == 'ALL') {
            // 나를 포함한 모든 클라이언트에게 메시지 전달
            console.dir('나 포함 모든 클라이언트에게 message 이벤트 전송');
            io.sockets.emit('message', message);
        }
    })
})