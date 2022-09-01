import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

/* Creating a slice of the store. */
export const StudentSlice = createSlice({
  name: "student",
  initialState: {
    token: "",
  },
  reducers: {
    setStudentState: (state, action) => {
      state.token = action.payload;
    },
    removeStudentState: () => {
      storage.removeItem("persist:student");
    },
  },
});

/* Exporting the action creator function. */
export const { setStudentState } = StudentSlice.actions;

export const { removeStudentState } = StudentSlice.actions;

/* Exporting the reducer function. */
export default StudentSlice.reducer;
