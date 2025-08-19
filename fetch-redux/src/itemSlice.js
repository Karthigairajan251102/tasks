// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // API fetch with thunk
// export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response.data;
// });

// const itemSlice = createSlice({
//   name: "items",
//   initialState: {
//     list: [],          // all API data
//     filteredList: [],  // only filtered items
//     searchTerm: "",
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     setSearchTerm: (state, action) => {
//       state.searchTerm = action.payload;

//       // filter inside Redux
//       state.filteredList = state.list.filter((item) =>
//         item.name.toLowerCase().includes(action.payload.toLowerCase())
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchItems.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchItems.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.list = action.payload;
//         state.filteredList = action.payload; // initially show everything
//       })
//       .addCase(fetchItems.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setSearchTerm } = itemSlice.actions;
// export default itemSlice.reducer;

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
})

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        list: [],
        filterData: [],
        searchItem: '',
        status: 'idle',
        error: null
    },
    reducers: {
        setSearchItem: (state, action) => {
            state.searchItem = action.payload

            state.filterData = state.list.filter((item) => {
                return item.name.toLowerCase().includes(action.payload.toLowerCase())
            })
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchItems.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchItems.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.list = action.payload
            state.filterData = action.payload
        })
        .addCase(fetchItems.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export const {setSearchItem} = itemSlice.actions

export default itemSlice.reducer