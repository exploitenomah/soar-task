import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCards = createAsyncThunk(
  "dashboard/fetchCards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/cards")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)

export const fetchRecentTransactions = createAsyncThunk(
  "dashboard/fetchRecentTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/transactions")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)

export const fetchWeeklyStats = createAsyncThunk(
  "dashboard/fetchWeeklyStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/weeklyActivity")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
export const fetchExpensesStats = createAsyncThunk(
  "dashboard/fetchExpensesStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/expenseStatistics")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
export const fetchBalanceHistory = createAsyncThunk(
  "dashboard/fetchBalanceHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/balanceHistory")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
export const fetchSavedBeneficiaries = createAsyncThunk(
  "dashboard/fetchSavedBeneficiaries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/savedBeneficiaries")
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      return await response.json()
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data")
    }
  },
)
