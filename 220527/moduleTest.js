const calc = require('./moduleEx3.js'); // require() 이용해 모듈 파일 불러옴
console.log('모듈로 분리한 후 - calc.add() 호출 결과: %d', calc.add(20, 20));

const calc2 = require('./moduleEx4.js'); 
console.log('모듈로 분리한 후 - calc2.add() 호출 결과: %d', calc2.add(10, 20));