// // src/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import itemsReducer from "./itemSlice";

// export const store = configureStore({
//   reducer: {
//     items: itemsReducer
//   }
// });

import { configureStore } from "@reduxjs/toolkit";
import itemReducer from './itemSlice'

export const store = configureStore({
  reducer: {
    items: itemReducer
  }
})
