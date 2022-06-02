/* 오라클과 연동하기 */

const oracledb = require('oracledb');
let connection;

async function checkConnection() {
    try {
        connection = await oracledb.getConnection({
            user: 'scott',
            password: 'tiger',
            connectString: 'XE'
        })
        console.log('데이터 베이스 연결 성공');
    } catch (err) {
        console.error(err.message);
    } finally {
        if (connection) {
            try {
                await connection.close(); // 반드시 필요
                console.log('데이터 베이스 연결 종료');
            } catch (err) {
                console.error(err.message);
            }
        }
    }
}

checkConnection();