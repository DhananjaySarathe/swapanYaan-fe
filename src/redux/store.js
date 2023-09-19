//@ts-nocheck
import {configureStore} from '@reduxjs/toolkit'
import qnaReducer from './qnaSlice'
const store = configureStore({
    reducer: {
        qna: qnaReducer,
      },
})

export default store;