import { createSlice } from "@reduxjs/toolkit";

/* Creating a slice of state. */
export const TakeQuizSlice = createSlice({
  name: "takeQuiz",
  initialState: {
    quiz: [],
  },
  reducers: {
    setTakeQuizState: (state, action) => {
      state.quiz = action.payload;
    },
  },
});

export const { setTakeQuizState } = TakeQuizSlice.actions;

export default TakeQuizSlice.reducer;
