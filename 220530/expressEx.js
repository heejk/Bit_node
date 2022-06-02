/* Express Framework */

// >> npm install express --save
const express = require('express');

// express 객체 생성
var app = express();

/* 서버 설정 */
// 기본 포트를 app 객체에 속성으로 설정 >> set(name, value): 서버 설정을 위한 속성 지정 >> set()으로 지정한 속성은 get()으로 확인
app.set('port', process.env.PORT || 3000); 

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Express 서버 시작
app.listen(app.get('port'), () => { 
    console.log('Express Server Start! ' + app.get('port'));
})