import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCards = createAsyncThunk(
  "dashboard/fetchCards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/db/cards.json")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return (await response.json()).cards
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)

export const fetchRecentTransactions = createAsyncThunk(
  "dashboard/fetchRecentTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/db/transactions.json")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return (await response.json()).transactions
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)

export const fetchWeeklyStats = createAsyncThunk(
  "dashboard/fetchWeeklyStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/db/weeklyActivity.json")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return (await response.json()).weeklyActivity
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
export const fetchExpensesStats = createAsyncThunk(
  "dashboard/fetchExpensesStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/db/expenseStatistics.json")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return (await response.json()).expenseStatistics
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
export const fetchBalanceHistory = createAsyncThunk(
  "dashboard/fetchBalanceHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/db/balanceHistory.json")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return (await response.json()).balanceHistory
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
export const fetchSavedBeneficiaries = createAsyncThunk(
  "dashboard/fetchSavedBeneficiaries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/db/savedBeneficiaries.json")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return (await response.json()).savedBeneficiaries
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
