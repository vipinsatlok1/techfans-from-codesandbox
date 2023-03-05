import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'getAllData',
    initialState: { value: 0 },
    reducers: {
        success(state, action) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
    },
});

export const { success, decrement } = counterSlice.actions;
export default counterSlice.reducer;
