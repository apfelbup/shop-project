import { configureStore } from "@reduxjs/toolkit";
import {productApi} from './productApi';
import cart from "./slices/cartSlice";
import pages from './slices/pagesSlice';
import storage from "redux-persist/lib/storage";
import products from './slices/productsSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from'redux-persist';

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,cart);


export const store = configureStore({
    reducer:{
        cart:persistedReducer,
        pages,
        products,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        },
    }).concat(productApi.middleware)
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



