import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";



const initialState = {
    users: [],
    status: null,
    error:null
};

 export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAllUsers()
        } catch (error) {
            return rejectWithValue(error.response.data.detail);
        }

    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]:(state)=>{
            state.status = 'pending';
            state.error = null;
        },
        [getAllUsers.fulfilled]:(state, action)=>{
            state.users = action.payload;

        },
        [getAllUsers.rejected]:(state, action)=>{
            state.error = action.payload;
        }

    }

});

const userReducer = userSlice.reducer;


export default userReducer;