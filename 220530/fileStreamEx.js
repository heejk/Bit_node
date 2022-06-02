/* 스트림 단위로 파일 읽고 쓰기 */

const fs = require('fs');
const infile = fs.createReadStream('./output.txt', { flags: 'r' });
const outfile = fs.createWriteStream('./output2.txt', { flags: 'w' });

infile.on('data', function (data) {
    console.log('읽어들인 데이터: ', data);
    outfile.write(data);
})

infile.on('end', function () {
    console.log('파일 읽기 종료');
    
    outfile.end(function () {
        console.log('파일 쓰기 종료');
    })
})