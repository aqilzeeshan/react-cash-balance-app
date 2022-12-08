//import redux toolkit
import { configureStore } from "@reduxjs/toolkit";
//import balance reducer
import balanceReducer from "./balance";
// The configureStore function to setup store with relevent settings
const store =  configureStore({
    reducer: {
        balance: balanceReducer,
    },
});
//export store to be used in index.js
export default store