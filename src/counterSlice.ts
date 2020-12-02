import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppThunk } from "./store";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    loading: false,
    error: "",
  },
  reducers: {
    start: (state) => {
      state.loading = true;
    },
    increment: {
      reducer: (state) => {
        state.count = state.count + 1;
        state.loading = false;
      },
      prepare: () => {
        console.log("Prepare increment");
        return { payload: 0 };
      },
    },
    decrement: (state) => {
      state.count = state.count - 1;
      state.loading = false;
    },
    counterError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  start,
  increment,
  decrement,
  counterError,
} = counterSlice.actions;

export default counterSlice.reducer;

export const incrementAsync = (): AppThunk => async (dispatch, getState) => {
  try {
    const existing = getState();
    console.log(existing);
    dispatch(start());
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    dispatch(increment());
  } catch (error) {
    dispatch(counterError(error.toString()));
  }
};
