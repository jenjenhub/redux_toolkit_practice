// 실제로 이 App.js 부분은 각자 기능구현되는 파일에서 (editModal, ChatBoard, SignIn 등) 실행된다. 즉 useSelector, useDispatch는 각 기능구현파일에서 사용된다.
import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/modules/counter";

function App() {
  // counter.js에서 initialState: {count: 0} 의 count부분을 가져온다.
  // state.root 라고 하는 이유는, store.js에서 rootReducer를 (주석상태에선 count) root이라 칭하기로 정했기 때문.
  // const count = useSelector((state) => state.root.count); 와 동일.
  const { count } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
    </div>
  );
}

export default App;
