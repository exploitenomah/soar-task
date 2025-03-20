import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  fetchBalanceHistory,
  fetchCards,
  fetchExpensesStats,
  fetchRecentTransactions,
  fetchSavedBeneficiaries,
  fetchWeeklyStats,
} from "../thunks/dashboard.thunk"

interface DashboardState {
  cards: Card[]
  recentTransactions: Transaction[]
  weeklyActivityStats: DataPoint[]
  expensesStats: PieObjectData[]
  balanceHistoryStats: DataPoint[]
  savedBeneficiaries: Beneficiary[]
  loading: boolean
  error: string
}

const initialState: DashboardState = {
  cards: [],
  recentTransactions: [],
  weeklyActivityStats: [],
  expensesStats: [],
  balanceHistoryStats: [],
  savedBeneficiaries: [],
  loading: true,
  error: "",
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    endLoading: (state) => {
      state.loading = false
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    removeError: (state) => {
      state.error = ""
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload
    })
    builder.addCase(fetchRecentTransactions.fulfilled, (state, action) => {
      state.recentTransactions = action.payload
    })
    builder.addCase(fetchWeeklyStats.fulfilled, (state, action) => {
      state.weeklyActivityStats = action.payload
    })
    builder.addCase(fetchExpensesStats.fulfilled, (state, action) => {
      state.expensesStats = action.payload
    })
    builder.addCase(fetchBalanceHistory.fulfilled, (state, action) => {
      state.balanceHistoryStats = action.payload
    })
    builder.addCase(fetchSavedBeneficiaries.fulfilled, (state, action) => {
      state.savedBeneficiaries = action.payload
    })
  },
})

export const { startLoading, endLoading, setError, removeError } = dashboardSlice.actions

export default dashboardSlice.reducer

export type Card = {
  balance: number
  cardHolder: string
  expiry: string
  cardNumber: string
  theme: "dark" | "light"
}

export type Transaction = {
  amount: number
  title: string
  date: string
  type: string
  id: string
}
export type DataPoint = {
  [x: string]: string | number
}
export type PieObjectData = { [x: string]: string | number; color: string }
export type Beneficiary = {
  profileImage: string
  occupation: string
  name: string
  id: string
}
