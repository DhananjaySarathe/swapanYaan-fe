import { createSlice } from '@reduxjs/toolkit';
const qnaSlice = createSlice({
  name: "qnaSlice",
  initialState:  {
    qnaArr: [],
  },
  reducers: {
    addData: (state, action) => {
      state.qnaArr.push(action.payload); 
    },
  },
});

export const { addData } = qnaSlice.actions; 
export default qnaSlice.reducer;
