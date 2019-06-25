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

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

$ nvm install --lts
```

## 새 react 프로젝트 만들기

```
npx create-react-app begin-react
```