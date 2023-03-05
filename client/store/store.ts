import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slices/tools/getAllData";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;