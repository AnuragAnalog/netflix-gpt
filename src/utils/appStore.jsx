import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import miscReducer from "./miscSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        misc: miscReducer,
    },
})

export default appStore