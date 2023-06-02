import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk(
    "auth/fetchAuth",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("auth/login", params);
            return data;
        } catch (error) {
            const { data, status } = error.response;
            return rejectWithValue(data.message);
        }
    }
);

export const fetchAuthMe = createAsyncThunk(
    "auth/fetchAuthMe",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("/auth/me");
            return data;
        } catch (error) {
            const { data, status } = error.response;
            if (status === 500) return rejectWithValue(data);
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
        loginOut(state) {
            state.data = null;
            state.token = null;
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
            state.error = null;
            state.status = "loading";
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
        },
        [fetchAuthMe.rejected]: (state, action) => {
            state.error = action.payload;
            state.status = "reject";
        },
    },
});

export const selectedIsAuth = (state) => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
export const { resetFeild, loginOut } = authSlice.actions;
