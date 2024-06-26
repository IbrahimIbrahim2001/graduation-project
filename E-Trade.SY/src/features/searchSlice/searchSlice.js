import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    SearchResult: []
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        getSearchResults: (state, action) => {
            state.SearchResult = action.payload;
        }
    }
});


export const { getSearchResults } = searchSlice.actions;
export default searchSlice.reducer;