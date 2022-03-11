import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import movieRankSlice from 'slices/MovieRankSlice';
import movieSearchSlice from 'slices/MovieSearchSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        movieRank: movieRankSlice,
        movieSearch: movieSearchSlice,
    },
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
    devTools: true,
});
export default store;
