// // src/features/itemsSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const itemsSlice = createSlice({
//   name: "items",
//   initialState: {
//     list: ["Apple", "Banana", "Cherry", "Dragonfruit", "Grapes"],
//     searchTerm: ""
//   },
//   reducers: {
//     setSearchTerm: (state, action) => {
//       state.searchTerm = action.payload;
//     }
//   }
// });

// export const { setSearchTerm } = itemsSlice.actions;
// export default itemsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    list: ["karthi", "Muthu", "svalli", "Priya", "Shash"],
    searchItem: ''
  },
  reducers: {
    setSearchItem : (state, action) =>{
      state.searchItem = action.payload
    }
  }
})

export const {setSearchItem} = itemSlice.actions

export default itemSlice.reducer;