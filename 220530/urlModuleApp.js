/* url 모듈: 주소 문자열 구분할 때 사용 */

// parse(): 주소 문자열을 파싱하여 URL 객체 생성
// format(): URL 객체를 주소 문자열로 변환

let url = require('url');
let curURL = url.parse('https://www.google.com/search?q=%EB%85%B8%EB%93%9C&oq=%EB%85%B8%EB%93%9C&aqs=chrome.0.69i59j0i3j0i433i512j0i131i433i512j0i433i512j69i61l2j69i60.5188j1j7&sourceid=chrome&ie=UTF-8');
let curStr = url.format(curURL);
console.log('주소 문자열: %s', curStr);
console.dir(curStr);
