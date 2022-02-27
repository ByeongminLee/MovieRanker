import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import movieRankSlice from 'slices/MovieRankSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        movieRank: movieRankSlice,
    },
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), logger],
    devTools: true,
});
export default store;
