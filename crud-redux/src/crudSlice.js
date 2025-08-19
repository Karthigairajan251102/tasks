// import { createSlice } from "@reduxjs/toolkit";

// const crudSlice = createSlice({
//   name: "crud",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push({ id: Date.now(), ...action.payload });
//     },
//     updateItem: (state, action) => {
//       const index = state.items.findIndex((i) => i.id === action.payload.id);
//       if (index !== -1) {
//         state.items[index] = action.payload;
//       }
//     },
//     deleteItem: (state, action) => {
//       state.items = state.items.filter((i) => i.id !== action.payload);
//     },
//   },
// });

// export const { addItem, updateItem, deleteItem } = crudSlice.actions;
// export default crudSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";


const crudSlice = createSlice({
  name: "crud",
  initialState: {
    items: []
  },
  reducers: {

    addItem: (state, action) => {
      state.items.push({id: Date.now(), ...action.payload})
    },

    updateItem: (state,action) =>{
      const {id, ...rest} = action.payload;
      const index = state.items.findIndex((i) => i.id === id)

      if (index !== -1) {
        state.items[index] = {...state.items[index], ...rest}
      }
    },

    deleteItem: (state, action)=> {
      state.items = state.items.filter((i) => i.id !== action.payload)
    }
  }
})

export const { addItem, updateItem, deleteItem } = crudSlice.actions
export default crudSlice.reducer