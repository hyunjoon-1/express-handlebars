# With express-handlebars

## 구조

```
express-handlebars
├─ app.js
├─ package.json
├─ public
│  └─ style.css
└─ views
   ├─ home.hbs
   ├─ layouts
   │  └─ main.hbs
   └─ partials
      ├─ footer.hbs
      └─ header.hbs
```

## 설명

서버생성과 express엔진에 handlebars를 적용시켜보았습니다.
partials를 사용하여 기본적인 화면을 구현하였고 css를 적용함에 있어 정적파일을 제공할 수 있게 static메서드를 활용했습니다.
