/* 외장 모듈 사용 */
// nconf 모듈 사용하면 시스템 환경 변수에 접근할 수 있음
// 외장 모듈 사용시 상대 path 사용하지 않음

const nconf = require('nconf');
nconf.env();
console.log('OS 환경 변수 : %s', nconf.get('OS'));

/* 설치된 외장 모듈의 사용 */
// >> npm install nconf --save