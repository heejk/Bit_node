/* 비동기 처리를 다루고 싶을 경우 */

function workP(sec) {
    // Promise 인스턴스를 반환하고, then에서는 성공시 콜백함수 호출
    return new Promise((resolve, reject) => {
        // Promise 생성시 넘기는 callback
        // resolve: 동작 완료시, reject: 오류 발생시
        setTimeout(() => {
            resolve(new Date().toLocaleString());
        }, sec * 1000);
    })
}

workP(1).then((result) => {
    console.log('first', result);
    return workP(1);
}).then((result) => {
    console.log('second', result);
})