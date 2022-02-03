import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./carSlice";
import userReducer from "./userSlice";
import commentReducer from "./commentSlice";
import postReducer from "./postSlice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        users:userReducer,
        comments:commentReducer,
        posts:postReducer
    }
});

export default store;