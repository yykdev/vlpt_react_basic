# 벨로퍼트와 함께 하는 모던 리액트( 입문 )

### DOM

> DOM 이란 ? 각 HTML 엘리먼트에 대한 정보를 가지고 있는 자바스크립트 객체

### Virtual DOM
> 브라우저에 실제로 보이는 DOM 이 아니라 메모리에 가상으로 존재하는 DOM
>
>자바스크립트 객체이기 때문에 실제로 브라우저에 돔을 보여주는 것보다 속도가 빠르다.

-----

## 개발 환경 구성 하기

### Node.js

> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
>
> nvm install --lts


- 버전 확인 : node --version

### yarn

> brew install yarn

- 버전 확인 : yarn --version

-----

## react 프로젝트

### 새 react 프로젝트 생성하기

> npx create-react-app begin-react

### 로컬 react 프로젝트 띄우기

> yarn start

-----

## JSX

> JSX는 리액트에서 컴포넌트의 생김새를 정의 할 때 사용 하는 문법
>
> 얼핏 보기엔 HTML과 같이 생겼지만 실제적으론 자바스크립트 이다.
>
> BABEL 을 통해 자바스크립트로 변환 되어 빌드 된다.

```
- JSX

<div><b>Hello,</b> <span>React</span></div>

- BABEL 변환
React.createElement("div", null, React.createElement("b", null, "Hello,"), " ", React.createElement("span", null, "React"));
```

### JSX 규칙
1. 태그는 꼭 닫히는 태그로 종료 돼야 한다.
 - input, br 태그나 시작태그와 종료 태그 사이에 아무것도 들어가지 않을 경우 self close tag 로 종료 한다. `ex) <input/>, <br/>`

2. 두개 이상의 태그는 꼭 한개의 태그로 감싸져 있어야 한다.
```
- 오류

<Hello/>
<div>test</div>

- 정상

<div>
    <Hello/>
    <div>test</div>
</div>

=> Tip. 복수의 태그를 묶기 위해 불필요하게 태그를 선언 하지 말고 프래그먼트를 사용하여 묶어 주도록 한다.
<>
    <Hello/>
    <div>test</div>
</>
```

3. JSX 내에서 자바스크립트 값을 보여주고 싶을 경우

> 중괄호에 변수명을 담아 표시 한다. : {변수명}

```
function App() {
  const name = 'react';
  return (
    <>
      <Hello/>
      <div>{name}</div>
    </>
  );
}
```

4. 엘리먼트의 스타일 지정 하기

> 객체에 스타일 형식을 담아 표시 한다.

- 인라인 방식
```
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1ren',
  };

  return (
    <>
      <Hello/>
      <div style={style}>{name}</div>
    </>
  );
}
```

- 클래스 css 방식

```
import './App.css';

...

import './App.css';

function App() {
  
  ...

  return (
    <>
      <Hello/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      // 기존 HTML과 다르게 class 가 아닌 className 으로 선언해야 한다.
    </>
  );
}
```

5. 주석

> JSX 내의 주석의 경우도 중괄호를 사용하여 출력 한다. : { 내용 }

-----

## props

> `prop`ertie`s` : properties 의 줄임말이며. 
>
> 컴포넌트를 사용하며 특정 값을 전달 해주고자 할 때 사용 한다.


-----

## 조건부 렌더링

> 조건부 렌더링 : 특정 조건의 참, 거짓의 여부에 따라 다른 결과물을 표현 해 주는 것.

