import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upComingMovies: null,
        mainTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        addMainTrailer: (state, action) => {
            state.mainTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, addMainTrailer, addPopularMovies, addUpComingMovies } = movieSlice.actions

export default movieSlice.reducer