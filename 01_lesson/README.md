# Lesson 1 : Redux Toolkit 이해하기
counter UI를 만들어보자
## 1. 설치
- redux toolkit
- react-redux
```
npm i @reduxjs/toolkit react-redux
```
## 2. store.js 에서 configureStore 작성
- src/app/store.js 생성
- import configureStore from redux toolkit
- { reducer } 를 인수로 갖는 configureStore 메서드를 store 변수에 저장 후 export

## 3. index.js에서 App 컴포넌트 래핑
- src/index.js 에서 import { store } from store.js
- import { Provider } from react-redux
- App 컴포넌트를 Provider 태그로 감싸는데, store 프로퍼티에 store 변수 할당해줌
  - useContext 와 비슷하게 래핑
  - 이로써 App 컴포넌트에서 전역 상태 사용 가능

## 4. counter slice 생성
- slice는 Reducer 함수와 관련이 있으며, 하나의 기능 역할을 한다 (counter)
- src/feature/counter/counterSlice.js 생성
- import { createSlice } from "@reduxjs/toolkit";
- initialState 객체 리터럴을 생성
- createSlice 작성
  - 객체안에 name, initialState, reducers 를 포함
  - reducer 함수들은 initialState를 인수로 받아 변경하는 형태 (setState 처럼)
- counterSlice를 export
  - action 들을 export 해주면 컴포넌트에서 간단히 action 지정 가능

## 5. store.js 에서 reducer 등록
- configureStore의 인수 내부에 counterSlice를 reducer에 등록
  - 이름을 counter로 사용 (counterSlice 에서 설정한 이름)

## 6. Counter 컴포넌트 생성 및 Reducer 연결
- feature/Counter.js 생성
- import { useSelector, useDispatch } from "react-redux";
- useSelector를 사용해 상태를 로컬 변수에 저장
- dispatch를 props에서 전달하기 위해 useDispatch 메서드를 호출
- useReducer와 다르게, action을 함수 형태로 전달