import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentPage:1,
}

export const pagesSlice = createSlice({
    name:'pages',
    initialState,
    reducers:{
        setCurrentPage(state,action){
            state.currentPage = action.payload;
        }
    }
});

export const {setCurrentPage} = pagesSlice.actions;

export default pagesSlice.reducer;