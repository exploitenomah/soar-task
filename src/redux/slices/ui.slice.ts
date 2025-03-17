import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export const uiSlice = createSlice({
  name: "counter",
  initialState: {
    isNavOpen: !false,
  },
  reducers: {
    toggleNavOpen: (state, action: PayloadAction<boolean>) => {
      state.isNavOpen = action.payload
    },
  },
})

export const { toggleNavOpen } = uiSlice.actions

export default uiSlice.reducer
