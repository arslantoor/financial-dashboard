import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../services/api'

// Async thunks
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  return await api.getTransactions()
})

export const addNewTransaction = createAsyncThunk(
  'transactions/addNewTransaction',
  async (transaction) => {
    return await api.addTransaction(transaction)
  }
)

const initialState = {
  transactions: [],
  loading: false,
  error: null,
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload)
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      )
    },
    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id
      )
      if (index !== -1) {
        state.transactions[index] = {
          ...state.transactions[index],
          ...action.payload,
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false
        state.transactions = action.payload
        state.error = null
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(addNewTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload)
        state.error = null
      })
  },
})

export const { addTransaction, removeTransaction, updateTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer
