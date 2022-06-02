function add(a, b, callback) {
    let result = a + b;
    callback(result);

    let history = function () { // inner function
        return a + '+' + 'b' + '=' + result;
    }
    return history; // 함수의 결과를 함수로 반환 
}

let add_history = add(10, 10, function (result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기 (10, 10)의 결과: %d', result);
})
console.log('결과 값으로 받은 함수 실행 결과: ' + add_history);


/* 비동기 처리 */
// non blocking
setTimeout(() => {
    console.log('todo: first!');
}, 3000);

setTimeout(() => {
    console.log('todo: second!');
}, 2000);