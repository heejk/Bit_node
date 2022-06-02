/* Book 테이블의 모든 정보 조회하여 브라으저에 출력하기 */

let express = require('express');
let app = express();

const oracledb = require('oracledb');
let connection;

async function selectAllBooks(req, res) {
    try {
        connection = await oracledb.getConnection({
            user: 'scott',
            password: 'tiger',
            connectString: 'XE'
        })
        console.log('데이터 베이스 연결 성공');
        result = await connection.execute('SELECT * FROM book');
    } catch (err) {
        return res.send(err.message);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('데이터 베이스 연결 종료');
            } catch (err) {
                console.error(err.message);
            }
        }

        if (result.rows.length == 0)
            return res.send('등록된 책이 없음');
        else
            return res.send(result.rows);
    }
}

app.get('/book/list', function (req, res) {
    selectAllBooks(req, res);
})

app.set('port', process.env.PORT || 3000);

app.listen(3000, function() { 
    console.log('Express Server Start! 3000');
})
