/* 이벤트 보내고 받기 */

process.on('tick', function (count) { // on(event, listener): 지정한 이벤트의 리스너 추가
    console.log('tick 이벤트 발생: %s', count);
})

setTimeout( function() {
    console.log('2초 후에 tick 이벤트 전달 시도');
    process.emit('tick', '2'); // emit(event, param): 이벤트 전송
}, 2000);