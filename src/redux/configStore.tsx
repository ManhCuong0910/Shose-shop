import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./ProductReducer/productReducer"
import userReducer from "./UserReducer/userReducer";

export const store = configureStore({
    reducer:{
        productReducer:productReducer,
        userReducer: userReducer
    }
})

export type RootState =  ReturnType<typeof store.getState>

// Hàm store.dispatch trả về gì thì nó sẽ là DispatchType 
export type DispatchType = typeof store.dispatch;