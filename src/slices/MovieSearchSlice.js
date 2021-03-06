import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { naverKeyID, naverKeySecret } from 'key.js';

export const getSearch = createAsyncThunk('/movie/search', async (payload, { rejectWithValue }) => {
    let result = null;
    let url = '/v1/search/movie.json';

    if (payload !== undefined) {
        url += `?query=${payload}`;
    }

    try {
        result = await axios.get(url, {
            headers: {
                'X-Naver-Client-Id': naverKeyID,
                'X-Naver-Client-Secret': naverKeySecret,
            },
        });
    } catch (err) {
        console.error('에러', err);
    }
    return result;
});

const movieSearchSlice = createSlice({
    name: 'movieSearch',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
    },

    reducers: {},
    extraReducers: {
        [getSearch.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [getSearch.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false,
            };
        },
        [getSearch.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt: payload?.status ? payload.status : '500',
                rtmsg: payload?.statusText ? payload.statusText : 'Server Error',
                loading: false,
            };
        },
    },
});

export default movieSearchSlice.reducer;
