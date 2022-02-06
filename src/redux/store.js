import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./modules/rootReducer";
import counter from "./modules/counter";

// rootReducer.js 에서 combined된 결과를 여기로 가져온다.
// (combineReducers를 사용했다면 root: rootReducer 형태로 들어온다.)
export const store = configureStore({
  reducer: {
    root: counter,
  },
});
