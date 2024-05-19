import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        mainTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMainTrailer: (state, action) => {
            state.mainTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, addMainTrailer } = movieSlice.actions

export default movieSlice.reducer