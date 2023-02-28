import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./reducer/loaderSlice";

export default configureStore({
    reducer: {
        loader: loaderReducer
    }
})