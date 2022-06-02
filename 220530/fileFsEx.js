/* 노드의 파일 시스템 */

// 동기식 IO와 비동기식 IO 모두 제공
// 동기식 IO: 파일 작업이 끝날 때까지 대기 (동기식 IO 메소드에서는 Sync라는 단어가 붙음)

let fs = require('fs');
let data = fs.readFileSync('./package.json', 'utf-8');
console.log(data);

// 비동기식 IO: readFile() 사용하면서 callback 함수를 파라미터로 전달 
fs.readFile('./package.json', 'utf-8', function (err, data) {
    console.log(data);
})
console.log('프로젝트 폴더 안의 package.json 파일 읽기');

// 비동기식으로 파일 쓰기
fs.writeFile('./output.txt', 'HelloWorld', function (err) {
    if (err)
        console.log('Error: ' + err);
    
    console.log('output.txt 파일에 데이터 쓰기 완료');
})