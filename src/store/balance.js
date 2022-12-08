//Import reduxjs toolkit
import { createSlice } from "@reduxjs/toolkit";
//Create balance slice to handle state of balance globally using redix
export const balanceSlice = createSlice({
    // This is the name of the slice of state that we will implement in our
    // empty store.
    name: "balance",

    // This is the initial state for your slice of state. 
    // Start application with 100 balance
    initialState: {
        value: 100,
    },

    // As indicated before. The reducer is used to manipulate the initial
    // state or current state.
    reducers: {
        //The balance amount should decrease by the user input
        withdraw: (state,action) => {
            state.value -= action.payload;
        },
        //The balance amount should increase by the user input
        deposit: (state,action) => {
            state.value += action.payload;
        },
        //The balance amount should increase by 5%
        addInterest: (state, action) => {
            console.log(state.value)
            state.value = state.value * 1.05;
        },
        //The balance amount should decrease by 15%
        addCharges: (state, action) => {
            console.log(state.value)
            state.value = state.value * 0.85
        }
    },
});

// Action creators are generated for each case reducer function.
export const { withdraw, deposit, addInterest, addCharges} = balanceSlice.actions;

// Exporting the reducer function that needs to be implemented into store.
export default balanceSlice.reducer;