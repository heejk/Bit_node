console.log('hello world');

/* 코드 실행 방법 */
// >> node 220527/ex01.js 

console.log('-----------------------------------------------------------------------------');

/* console 객체 */
console.log('숫자 보여주기: %d', 10);
console.log('문자열 보여주기: %s', '안녕!');
console.log('JSON 객체 보여주기: %j', { name: '코난' });

console.log('-----------------------------------------------------------------------------');

/* console 객체의 주요 메소드 */
// dir(object): 자바스크립트 객체의 속성들 출력
// time(id): 실행 시간을 측정하기 위한 시작 시간 기록
// timeEnd(id): 실행 시간을 측정하기 위한 끝 시간 기록
var result = 0;
console.time('elapsedTime');

for (var i = 1; i <= 100; i++) 
    result += i;   

console.timeEnd('elapsedTiem');
console.log('1부터 100까지 합: %d', result);

console.log('-----------------------------------------------------------------------------');

/* 실행한 파일 이름과 객체 정보 출력 */
console.log('현재 실행한 파일의 이름: %s', __filename); // __filename: 전역변수 
console.log('현재 실행한 파일 path: %s', __dirname); // __dirname: 전역변수 
var Person = { name: "conan", age: 10 };
console.dir(Person); // 객체 정보 출력 

console.log('-----------------------------------------------------------------------------');

/* npm (node package manager) */
// npm init: Node.js를 시작하기 위한 초기화 작업
// package.json: 패키지 정보를 관리하는 작업 

/* 모듈 */
// 프로그램 내부를 기능별 단위로 분할한 부분, 별도의 파일로 분리된 독립 기능 
// CommonJs 표준 스펙을 따르며 exports 전역 객체 사용 
