//
// todos 모듈 작성하기
//
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "리액트 네이티브 배우기", done: true },
  { id: 2, text: "상태 관리 배우기", done: false },
];

// 새 Todo 항목을 추가할 때 사용할 id 값
let nextId = 3;

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // createSlice에는 액션 생성 함수에서 액션 객체를 만드는 과정을 커스터마이징 할 수 있음 -> prepare과 reducer 함수가 있는 객체 넣어줌
    // prepare 함수: 액션 생성 함수가 호출되어 액션을 만들기 전에 특정 작업을 수행 -> payload를 지닌 객체를 반환
    // 추후 액션 생성 함수가 호출되면 이렇게 반환된 객체를 참조하여 액션 객체를 만들고, 커스터마이징된 payload값은 그 아래 선언된 reducer에서 사용 가능
    // 예시) add('리덕스 배우기') -> {type:'todos/add', payload:{id:1, text:'리덕스 배우기'}}
    add: {
      prepare(text) {
        const prepared = { payload: { id: nextId, text } };
        nextId += 1;
        return prepared;
      },
      reducer(state, action) {
        // Redux Toolkit를 사용하기에 불변성 유지하지 않아도 자동으로 관리
        // 리듀서에서 반환되는 값이 없을때는 라이브러리에서 불변성 유지를 자동으로 해주지만, 값을 반환한다면 불변성 자동 관리를 생략함
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },

    // id로 원하는 원소 제거
    remove(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index);
      // 또는 return state.filter((todo) => todo.id !== action.payload);
    },

    // id로 원하는 원소 done값 토글
    toggle(state, action) {
      // 불변성이 알아서 관리되기에 .map() 사용하지 않고
      // 원하는 원소 찾아서 바로 수정
      const selected = state.find((todo) => todo.id === action.payload);
      if (!selected) {
        return;
      }
      selected.done = !selected.done;
    },
  },
});

export const { add, remove, toggle } = todosSlice.actions;
export default todosSlice.reducer;
