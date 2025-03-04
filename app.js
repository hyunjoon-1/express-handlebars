//todo express와 express-handlebars 설치완료 후 require로 요청받기// $ npm install express-handlebars //
//require 함수로 모듈가져오기 (commonJS)
const express = require('express');
const app = express();
//PORT 3000 설정
const PORT = 3000;



app.listen(PORT, () => {
  console.log('Loading...','http://localhost:3000')
});
