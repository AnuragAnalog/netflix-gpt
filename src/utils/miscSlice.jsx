import { createSlice } from "@reduxjs/toolkit";

const miscSlice = createSlice({
    name: "misc",
    initialState: {
        selectedLang: "en"
    },
    reducers: {
        updateSelectedLang: (state, action) => {
            state.selectedLang = action.payload
        }
    }
})

export const { updateSelectedLang } = miscSlice.actions

export default miscSlice.reducer