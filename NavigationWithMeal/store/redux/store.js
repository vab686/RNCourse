import { configureStore } from "@reduxjs/toolkit"

import favoriatesReducer from "./favoriates"

const store = configureStore({
  reducer: {
    favoriatesMeals: favoriatesReducer
  }
})

export default store