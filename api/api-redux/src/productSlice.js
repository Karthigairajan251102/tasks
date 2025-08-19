import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchData =  createAsyncThunk("products/fetchData", async () => {
    const res = await axios.get("http://localhost:1000/api/products")
    return res.data
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchData.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = "succeeded"
            state.items = action.payload
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer