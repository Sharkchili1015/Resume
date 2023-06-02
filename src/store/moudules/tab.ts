import { createSlice } from '@reduxjs/toolkit'

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    activeTab: 'home',
    tabList: [
      {
        path: 'home',
        name: '首页',
      },
      {
        path: 'about',
        name: '关于',
      },
    ],
  },
  reducers: {
    updateActiveTab(state, { payload }) {
      state.activeTab = payload
    },
  },
})

export const { updateActiveTab } = tabSlice.actions

export default tabSlice.reducer
