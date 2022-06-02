/*
let: 재할당 가능
const: 재할당 불가능
let, const 사용 >> 변수를 중복 선언하지 못하게 함
*/

let dog;
dog = "happy";
console.log(dog);

// Scope: 변수에 접근할 수 있는 범위

// 람다식을 이용한 함수 선언
const lamda_add = (a, b) => {
    return a + b;
}
console.log("lamda add: " + lamda_add(1, 2));

