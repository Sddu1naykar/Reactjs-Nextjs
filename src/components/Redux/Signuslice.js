import { createSlice } from "@reduxjs/toolkit";

const signupDetailsSlice = createSlice({
  name: "signup",
  initialState: [{},],
  reducers: {
    addSignupDetails: (state, action) => {
      state.push(action.payload);
      },
      
  },
});

export const {  addSignupDetails } = signupDetailsSlice.actions;
export default signupDetailsSlice.reducer;
