/* Template Engine */

let express = require('express');
let http = require('http');
let path = require('path');
let bodyParser = require('body-parser'), static = require('serve-static');

let app = express();

app.set('port', process.env.PORT || 3000);

app.set('/views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index',
        { // 화면과 결합될 데이터
            "Kids": [ { "name": "conan", "age": 10 }, { "name": "rose", "age": 17 }, { "name": "ran", "age": 17 }],
            "title": "EJS Example"
        }
    )
})

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());


// Express 서버 시작
app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})

