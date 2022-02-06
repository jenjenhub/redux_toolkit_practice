import { createSlice } from "@reduxjs/toolkit";

// createSlice : can define state, reducers, actions all in one place (simpler way)
// name: "counter" -> just the name of the Slice
//
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    isOpen: false,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      // when we want to increment by a specific amount passed in by a button (이 방식 주로 쓰게 될 것)
      // payload에 아무거나 원하는걸 집어넣을 수 있게 해줌.
      state.count += action.payload;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  openModal,
  closeModal,
} = counterSlice.actions;

export default counterSlice.reducer;
