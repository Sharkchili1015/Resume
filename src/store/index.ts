import { configureStore } from '@reduxjs/toolkit'
import  themeSlice  from './moudules/theme'
import  tabSlice  from './moudules/tab'
const store = configureStore({
  reducer: {
    theme: themeSlice,
    tab: tabSlice,
  },
})

export default store
