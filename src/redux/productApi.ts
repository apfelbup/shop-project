import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProducts } from '../types';


export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://63ee20ecd466e0c18ba9d22e.mockapi.io/'}),
    endpoints:(build)=>({
        getProduct: build.query<IProducts[],number>({
            query:(limit=8,currentPage=1)=> `dress?page=${currentPage}&${limit && `limit=${limit}`}`,
        })
    })
})

export const {useGetProductQuery} = productApi;