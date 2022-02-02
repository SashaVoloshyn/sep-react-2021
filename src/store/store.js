import {configureStore} from "@reduxjs/toolkit";

import todoReducer from "./todoSlice";

const store = configureStore({
    reducer: {
        todoRed:todoReducer
    }

});

export default store;