// 객체를 직접 할당하기 위해 module.exports
const calc = {};

calc.add = function (a, b) {
    return a + b;
}

calc.multiply = function (a, b) {
    return a * b;
}

module.exports = calc;