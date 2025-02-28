import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../services/api'

// Async thunks
export const fetchStatistics = createAsyncThunk('statistics/fetchStatistics', async () => {
  return await api.getStatistics()
})

const initialState = {
  weeklyActivity: {},
  expenseStatistics: [],
  balanceHistory: {},
  loading: false,
  error: null,
}

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    updateWeeklyActivity: (state, action) => {
      state.weeklyActivity = action.payload
    },
    updateExpenseStatistics: (state, action) => {
      state.expenseStatistics = action.payload
    },
    updateBalanceHistory: (state, action) => {
      state.balanceHistory = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.loading = false
        state.weeklyActivity = action.payload.weeklyActivity
        state.expenseStatistics = action.payload.expenseStatistics
        state.balanceHistory = action.payload.balanceHistory
        state.error = null
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { updateWeeklyActivity, updateExpenseStatistics, updateBalanceHistory } =
  statisticsSlice.actions

export default statisticsSlice.reducer
