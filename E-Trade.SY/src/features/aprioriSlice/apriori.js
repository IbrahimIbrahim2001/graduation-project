import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    AprioriResult: []
}

const aprioriSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        getAprioriResults: (state, action) => {
            state.AprioriResult = action.payload;
        }
    }
});


export const { getAprioriResults } = aprioriSlice.actions;
export default aprioriSlice.reducer;