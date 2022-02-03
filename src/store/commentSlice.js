import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../services";

const initialState ={
    comments:[],
    status:null,
    error:null
}

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_,{rejectWithValue}) => {
        try {
            return await commentService.getAllComments()
        } catch (error) {
            return rejectWithValue(error.response.data.detail);
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllComments.pending]:(state)=>{
            state.status = 'pending';
            state.error = null;
        },
        [getAllComments.fulfilled]:(state, action)=>{
            state.comments = action.payload;

        },
        [getAllComments.rejected]:(state, action)=>{
            state.error = action.payload;
        }
    }

});

const commentReducer = commentSlice.reducer;


export default commentReducer;