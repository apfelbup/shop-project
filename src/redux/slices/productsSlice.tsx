import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {IProducts} from '../../types'


interface productsState {
    products: null | Array<IProducts>,
    status: null | string,
    error: null | string | any,
    category: string,
    sortOptions: string
}


const initialState:productsState={
    products:[],
    status:null,
    error:null,
    category:'',
    sortOptions:'rating'
}

export const fetchProducts = createAsyncThunk<any,object>(
    'products/fetchProducts',
    async function(currentPage,{rejectWithValue,getState}){
        try{
            const state:object|any=getState();
            const response = await fetch(`https://63ee20ecd466e0c18ba9d22e.mockapi.io/dress?page=${currentPage.currentPage}&limit=8&category=${state.products.category}&sortBy=${state.products.sortOptions}&order=${state.products.sortOptions === 'rating'? 'desc' :'asc'}`);
            if(!response.ok){
                throw new Error('ServerError');
            }

            const data = await response.json();
            return data;
        }catch(error:string|any){
            return rejectWithValue(error.message)
        }

    }
)


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        changeCategory:(state, action) => {
            action.payload === undefined?
            state.category = ''
            :
            state.category = action.payload;
        },
        changeSortOptions:(state,action)=>{
            state.sortOptions = action.payload;
        }
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchProducts.pending, (state)=>{
            state.status = 'loading';
        }),
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.status = 'resolved';
            state.products = action.payload;
        }),
        builder.addCase(fetchProducts.rejected, (state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
            console.error(action.payload)
        })
    },
});


export const {
    changeCategory,
    changeSortOptions
} = productsSlice.actions;
export default productsSlice.reducer;





