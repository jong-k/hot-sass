# Sass Tutorial
> 주로 사용하는 SCSS 중심으로 기록
## 1. Intro
### 1.1. Sass란?
- Sass : Syntactically Awesome Style Sheets
- CSS의 슈퍼셋으로, 문법적인 간편함과 추가 기능을 제공
- 브라우저에서 동작하지 않기 때문에, CSS로 컴파일 필요
- node.js 에서 `npm i sass` 로 간편하게 설치
### 1.2. sass
- `.sass` 확장자 사용
- 세미콜론 사용 X
- {} 대신 들여쓰기를 통해 코드블럭 구분
- 이외 css의 모든 기능 사용 가능
### 1.3. scss ✅
- `.scss` 확장자 사용
- sass와 달리, css를 그대로 scss로 사용 가능 (컴파일은 필요)
### 1.4. 컴파일
- sass 전역 라이브러리가 설치되어 있어야 함
- CLI에서 실행 `sass <input.scss> [output.css]`
- 또는 웹스톰 IDE에서 file watcher 설정을 통해 저장시 자동으로 컴파일되게 할 수도 있음
- css 파일과 소스맵 파일까지 같이 생성된다
## 2. Nesting
### 2.1. Nested Selectors
- 클래스나 element같은 선택자 이름을 중복해서 사용할 필요가 없다
### 2.2. Nested Properties
- (dash로 구분된) 같은 namespace의 프로퍼티들을 합쳐서 사용할 수 있다
- namespace (아래에서는 flex) 뒤에 콜론을 붙여줘야 한다
- 예시

```scss
// main.scss

// 구분 전
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

// 구분 후
.container {
  display: flex;
  flex: {
    direction: column;
    wrap: nowrap;
  }
}
```
## 3. 변수, 리스트, 맵
### 3.1. 변수
- `$`으로 변수를 저장한다
  - 기존 CSS에서는 `--`, `var()` 를 사용했었다
### 3.2. 리스트
- ($el1, $el2, ...) 형태로 사용
- 맵의 한 페어를 원소가 2개인 리스트로 간주하기 때문에, 맵에 리스트 함수를 쓸 수 있다
  - 예) (1: 2, 3: 4) 같은 맵은 (1 2, 3 4)와 같다
### 3.3. 맵
- 키, 밸류 페어를 통해 변수를 저장
- 예시
```scss
// main.scss
$colors: (main: #521751, secondary: #fa923f);

.item:hover {
  background: map-get($colors, secondary);
}
```

## 4. 빌트인 함수
### 4.1. color functions
- lighten, darken : 밝기(휘도)를 조절
- 예시

```scss
background: lighten(#fae5ff, 90%);
```

- saturate, desaturate : 채도 변경
- opacify

## 5. 연산
- 변수에 기본적인 연산이 가능하다
- 예시
```scss
$size-default: 1rem;

.container {
    padding: $size-default * 3 0; // 3rem 0
  }
```

## 6. import ⭐
- index.html 파일에서 main.css 파일을 사용하고, main.css 파일은 `typography.css` 파일을 import 한다
- main.css 파일이 `typography.css` 대신 `typography.scss`를 import하게 하는 것이 좋다
- 그 이유는, HTTP 요청 횟수를 줄여 더 빠른 앱을 만들 수 있기 때문이다.
  - 또 다른 css를 import하게 되면, 모든 css에 HTTP 요청을 하지만,
  - scss를 import 하는경우, 컴파일된 main.css 하나만 HTTP 요청을 보내기 때문에 불필요한 네트워크 송수신을 줄일 수 있다

## 7. media queries
- media query를 전역 대신 선택자 안에 넣을 수 있다

## 8. 상속
- `@extends 선택자` 를 통해 특정 선택자를 상속할 수 있다
## 9. mixins
### 9.1. mixin 작성
- mixin을 통해 코드를 쉽게 재사용할 수 있다
- 또한, 함수처럼 매개변수 기능도 지원한다
  - 이 때, mixin 이름 뒤에 () 와 매개변수를 추가해준다
  - 매개변수는 $를 앞에 붙여준다
- `@content` 를 통해 사용처에서 내용을 자유롭게 추가할 수 있게 해준다
- 예시
```scss
@mixin media-min-width($width) {
  @media (min-width: $width) {
    @content;
  }
}
```
### 9.2. @include
- 이미 만들어놓은 믹스인을 사용하려면 `@include` 키워드를 사용한다
- 예시
```scss
html {
  font-size: 94.75%;

  @include media-min-width(40rem) {
    font-size: 125%; // @content 에 해당하는 부분
  }
}
```