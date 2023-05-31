import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async (params, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message);
            }

            const { userData, token } = await res.json();

            return { userData, token };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchAuthMe = createAsyncThunk(
    "auth/testFetch",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                "http://localhost:8000/auth/login",
                params
            );
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: null,
        status: null,
        error: null,
        token: null,
    },
    reducers: {
        resetFeild(state) {
            state.error = null;
        },
    },
    extraReducers: {
        [fetchAuth.pending]: (state, action) => {
            state.status = "loading";
            state.error = null;
            state.token = null;
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload.userData;
            state.status = "loaded";
            state.token = action.payload.token;
        },
        [fetchAuth.rejected]: (state, action) => {
            state.data = null;
            state.error = action.payload;
        },
        // fetchAuthMe
        [fetchAuthMe.pending]: (state, action) => {
            state.status = "loadingMe";
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = "loadedMe";
        },
        [fetchAuthMe.rejected]: (state, action) => {
            state.status = "rejectedMe";
        },
    },
});

export const authReducer = authSlice.reducer;
export const { resetFeild } = authSlice.actions;
