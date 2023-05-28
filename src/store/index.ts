import { configureStore } from "@reduxjs/toolkit"
import { themeSlice } from "./moudules/theme"

const store = configureStore({
  reducer: {
    theme: themeSlice,

  }
})

export default store
