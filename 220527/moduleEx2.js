// require()를 통해 다른 모듈의 기능을 불러와 사용 
const a = require('./moduleEx1.js');
console.log(a + ' in Ex2.js');

// >> node 220527/moduleEx2.js
// 결과: var a from Ex1.js in Ex2.js