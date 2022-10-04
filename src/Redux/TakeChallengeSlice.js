import { createSlice } from "@reduxjs/toolkit";

/* Creating a slice of state for the take challenge. */
export const TakeChallengeSlice = createSlice({
  name: "takeChallenge",
  initialState: {
    quiz: [],
  },
  reducers: {
    setTakeChallengeState: (state, action) => {
      state.quiz = action.payload;
    },
  },
});

export const { setTakeChallengeState } = TakeChallengeSlice.actions;

export default TakeChallengeSlice.reducer;
