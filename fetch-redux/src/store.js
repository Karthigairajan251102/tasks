// import { configureStore } from "@reduxjs/toolkit";
// import itemReducer from "./itemSlice";

// const store = configureStore({
//   reducer: {
//     items: itemReducer,
//   },
// });

// export default store;

import {configureStore} from "@reduxjs/toolkit"
import itemReducer from './itemSlice'

const store = configureStore({
    reducer: {
        items: itemReducer
    }
})

export default store
