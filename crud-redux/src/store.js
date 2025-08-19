// import { configureStore } from "@reduxjs/toolkit";
// import crudReducer from "./crudSlice";

// const store = configureStore({
//   reducer: {
//     crud: crudReducer,
//   },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import crudReducer from './crudSlice'

const store = configureStore({
  reducer: {
    crud:crudReducer
  }
})

export default store