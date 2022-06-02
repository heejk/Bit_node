let path = require('path');

// 디렉토리 이름 합치기
let directories = ['user', 'mlik', 'docs'];
let docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리: %s', docsDirectory);

// 디렉토리 이름과 파일 이름 합치기
let curPath = path.join('/Users/heeji', 'notepad.exe');
console.log('파일 path: %s', curPath);

// path에서 디렉토리, 파일 이름, 확장자 구별하기 
let fileName = '/Users/heeji/notepad.exe';
let dirName = path.dirname(fileName);
let baseName = path.basename(fileName);
let extName = path.extname(fileName);
console.log('디렉토리: %s, 파일이름: %s, 확장자: %s', dirName, baseName, extName);