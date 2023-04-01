import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


type T = {
    title:string,
    description:string,
    price:number,
    category:string,
    rating:number,
    avatar:string,
    id:number |string
    added: boolean,
    quantity:number,
    size:string
}
interface productsState {
    cartItems: Array<T>
}


const initialState:productsState={
    cartItems:[]
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            const itemInCart = state.cartItems.find((item)=> item.id === action.payload.id+action.payload.size && item.size === action.payload.size);
            if(itemInCart){
                itemInCart.quantity++
            }else{
                action.payload.id = action.payload.id+action.payload.size;
                state.cartItems.push({...action.payload, quantity:1})
            }
        },
        removeItem:(state,action)=>{
            const removeItem = state.cartItems.filter((item)=> item.id !== action.payload);
            state.cartItems = removeItem;
        },
        clearAll:(state)=>{
            state.cartItems = [];
        },
        incrementQuantity:(state,action)=>{
            const item = state.cartItems.find((item)=>item.id === action.payload);
            item!.quantity++;
        },
        decrementQuantity:(state,action)=>{
            const item = state.cartItems.find((item)=>item.id === action.payload);
            item?.quantity === 1 ? item.quantity = 1 :item!.quantity--;
        }
    }
});


export const {
    clearAll,
    addToCart,
    removeItem,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
