import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            console.log("increment", state.value)
            state.value += 1;
        },
        decrement: (state) => {
            console.log("decrement", state.value)
            state.value -= 1;
        },
        incrementByAmount : (state, action) => {
            state.value += action.payload
        }
    }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;