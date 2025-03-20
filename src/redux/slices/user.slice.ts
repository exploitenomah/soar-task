import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

interface UserData {
  id: number
  name: string
  username: string
  email: string
  dob: string
  presentAddress: string
  permanentAddress: string
  city: string
  state: string
  postalCode: string
  country: string
  profileImage?: string
  password?: string
}

interface UserState {
  data: UserData | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  data: null,
  loading: true,
  error: null,
}

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/db/user.json")
      if (!response.ok) {
        throw new Error("Failed to fetch user data")
      }
      return (await response.json()).user
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.data = null
      state.error = null
    },
    updateUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearUserData, updateUserData } = userSlice.actions
export default userSlice.reducer
