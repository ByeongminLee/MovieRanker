import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';

export const getRank = createAsyncThunk('/movie/rank', async (payload, { rejectWithValue }) => {
    if (payload === undefined) {
        payload = dayjs().add(-1, 'd').format('YYYYMMDD');
    }

    const targetDt = payload.replaceAll('-', '');
    let result = null;

    try {
        const date = dayjs().add(-1, 'd').format('YYYYMMDD');
        if (parseInt(targetDt) > parseInt(date)) {
            const err = new Error();
            err.response = {
                status: 400,
                statusText: '조회 가능한 날짜는 하루 전까지만 가능합니다.',
            };
            throw err;
        }

        const apiUrl =
            'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';

        result = await axios.get(apiUrl, {
            params: { key: process.env.REACT_APP_MOVIE_RANK_URL, targetDt: targetDt },
        });

        if (result.data.faultInfo !== undefined) {
            const err = new Error();
            err.response = { status: 500, statusText: result.data.faultInfo.message };
            throw err;
        }
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

const movieRankSlice = createSlice({
    name: 'movieRank',
    initialState: {
        rt: null,
        rtmsg: null,
        item: [],
        loading: false,
    },

    reducers: {},
    extraReducers: {
        [getRank.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [getRank.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                rt: payload.status,
                rtmsg: payload.statusText,
                item: payload.data,
                loading: false,
            };
        },
        [getRank.rejected]: (state, { payload }) => {
            return {
                ...state,
                rt: payload?.status ? payload.status : '500',
                rtmsg: payload?.statusText ? payload.statusText : 'Server Error',
                loading: false,
            };
        },
    },
});

export default movieRankSlice.reducer;
