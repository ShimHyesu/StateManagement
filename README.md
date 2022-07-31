# 리덕스 라이브러리
상태 업데이트하는 리듀서 함수 기반으로 작동

성능 최적화 용이, 미들웨어 기능 사용 가능


## 개념 정리
리덕스는 상태를 업데이트할 때 리듀서 함수를 사용
```JavaScript
function reducer(state,action) {
  // action에 따라 업데이트된 상태를 반환
}
```
> action 파라미터: 변화를 정의하는 객체 -> type 필드를 반드시 지니고 있어야 함

리듀서 함수에서는 state와 action 값을 참조하여 업데이트된 상태를 반환


### 모듈 작성하기
```JavaScript
// 액션 타입
const INCREASE = 'increase';
const INCREASE_BY = 'increase_by';

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const increase_by = (by) => ({ type: INCREASE_BY, by });

// 초기 상태
const initialState={
  value=1
};

// 리듀서 함수
export function counter(state=initialState, action) {
  switch(action.type) {
    case INCREASE:
      return { value: state.value + 1 };
     case INCREASE_BY:
      return { value: state.value + action.by };
     default:
      return state;
  }
}
```
#### 액션타입
액션 타입은 문자열, 주로 대문자로 선언
#### 액션 생성 함수
액션 객체를 만들어주는 함수

increase_by처럼 객체 내부에 동적인 값 넣어줘야 할 때 있음

추후 컴포넌트 불러와야 하므로 export해야 함
#### 리듀서 함수
state와 action 파라미터를 받아와 업데이트된 상태 반환

useReducer와 다른 점
1. 초기 상태를 기본 파라미터 문법 사용하여 state = initialState 형식으로 지정
2. default: 케이스에서 오류를 발생시키지 않고 state를 반환
상태의 불변성을 유지하며 업데이트 해줘야 함 -> state 직접 수정하지 않고 새로운 값을 만들어 반환

추후 여러 리듀서와 합쳐야 하므로 export 해주어야 함. 주로 export default로 내보내줌


### 루트 리듀서 만들기
리덕스 사용할때는 **기능별로 모듈을 작성** 그리고 각 모듈에 있는 여러 리듀서를 하나의 리듀서로 합쳐야 함

리듀서를 하나로 합칠 때 리덕스 라이브러리에 내장되어있는 combineReducers 함수 사용
```JavaScript
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counter,
  todos,
  setting
});

export default rootReducer;
```


### 스토어 만들기
리액트 프로젝트에서는 **단 하나의 스토어**를 생성

리덕스의 스토어에는 리덕스를 관리하는 모든 상태가 들어있으며, 현재 상태를 조회할 수 있는 getState 함수와 액션을 일으킬 수 있는 dispatch함수가 들어있음
```JavaScript
import {createStore} from 'redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

export default store;
```


### Provider로 리액트 프로젝트에 리덕스 적용
리액트 프로젝트에서 작성한 store를 사용하려면 Provider 컴포넌트를 사용해 전체 앱을 감싸주어야 함

Provider 컴포넌트는 react-redux 라이브러리에 내장
```JavaScript
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

function App() {
  return(
    <Provider store={store}>
      { /* ... */ }
    </Provider>
  );
}

export default App;
```


### useSelect와 useDispatch로 컴포넌트에서 리덕스 연동
프로젝트에 Provider을 사용하여 리덕스를 적용하면 

useSelector Hook을 사용해 리덕스의 상태를 조회, useDispatch를 사용해 액션을 발생시켜 상태를 업데이트 할 수 있음

이 함수들 또한 react-redux 라이브러리에 내장되어 있는 Hook
```JavaScript
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from './modules/counter';

function Counter() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const onPressIncrease = () => {
    dispatch(increase());
  };
  // (...)
}

export default Counter;
```
useSelector Hook
* 셀렉터 함수를 인자로 넣어줌 -> 이 함수에서 state 파라미터는 스토어가 지니는 현재 상태를 가리킴. 셀렉터 함수에서는 이 컴포넌트에서 사용하고 싶은 값을 반환
* useSelector를 사용하면 **셀렉터를 사용해 조회한 상태가 바뀔 때마다 컴포넌트가 렌더링** -> Context를 사용했을 때와 가장 다른 차이점


## Redux Toolkit
액션 타입, 액션 생성함수, 리듀서 한번에 작성

**상태 업데이트시 불변성에 신경쓰지 않아도 됨** -> 내장된 라이브러리 immer 사용하여 불변성을 유지하며 업데이트 해줌
```JavaScript
import {createSlice} from '@reduxjs/toolkit';

const initialState = {value:1};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state, action) {
      state.value += 1;
     },
    increaseBy(state, action) {
      state.value += action.payload;
     },
   }
 });
  
 export const {increase, increaseBy} = counterSlice.actions;
 export default counterSlice.reducer;
```
### 액션 생성 함수와 리듀서
createSlice를 사용하면 액션 생성 함수와 리듀서를 동시에 생성 -> 액션 타입 선언하지 않아도 됨
* counterSlice.actions는 액션 생성 함수들이 들어있는 객체 가리킴
* counterSlice.reducer는 리듀서 함수 가리킴

**액션 타입 조회해야 한다면 액션 생성 함수의 type 필드 확인** (예: increase.type)


### slice의 이름과 액션 타입
 slice 만들 때 name을 지정하여야 함
 
 여기서 작성한 name은 액션 타입이 만들어질 때 name/액션 이름 형태로 사용
 
 
 ### 액션의 payload
 Redux Toolkit에서는 **액션에 추가로 넣어줄 값의 이름이 payload로 통일**되며, 이는 액션 생성 함수의 파라미터를 통해 정해짐
 
 
 ### 자동으로 이루어지는 불변성 관리
 createSlice에서 사용하는 리듀서 메서드에서는 불변성 신경쓰지 말고 state값을 직접 수정 가능
 
 immer 라이브러리 내장되어 있어 **불변성을 자동으로 관리**
 
 
 ### 타입스트립트와 함께 사용
 Redux Toolkit은 타입스크립트 공식적으로 지원
 
 1. initialState에 타입 달아주기
 2. 액션 타입에 PayloadAction 사용
