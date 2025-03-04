//todo express와 express-handlebars 설치완료 후 require로 요청받기// $ npm install express-handlebars //
//require 함수로 모듈가져오기 (commonJS)
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
// css 정적 파일을 가져오기위한 코드 
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
//PORT 3000 설정
const PORT = 3000;
// handlebars 확장자를 hbs로 변경(extname으로 설정. 기본은 handlebars)
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials'
  })
);
//express에 환경설정하기. view엔진에 handlebars를 사용한다.
app.set('view engine', 'hbs');
app.set('views', './views');

// get방식으로 home 출력하기
app.get('/', (req, res) => {
  // render메서드로 데이터 렌더링
  res.status(200).render('home', {
      first: "Hello, ", second: "World!", name: "Hyunjoon Choi"
    });
});

app.listen(PORT, () => {
  console.log('Loading...','http://localhost:3000')
});
