import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  ids: []
}

const favoriatesSlice = createSlice({
  name: "favoriates",
  initialState,
  reducers: {
    addFavoriate(state, action) {
      state.ids.push(action.payload)
    },
    removeFavoriate(state, action) {
      // state.ids = state.ids.filter(favoriate => favoriate.id === action.payload)
      state.ids.splice(state.ids.indexOf(action.payload), 1)
    }
  }
})

export const { addFavoriate, removeFavoriate } = favoriatesSlice.actions
export default favoriatesSlice.reducer