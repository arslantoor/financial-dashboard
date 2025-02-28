import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../services/api'

// Async thunks
export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  return await api.getCards()
})

export const addNewCard = createAsyncThunk('cards/addNewCard', async (card) => {
  return await api.addCard(card)
})

export const removeExistingCard = createAsyncThunk('cards/removeExistingCard', async (id) => {
  return await api.deleteCard(id)
})

const initialState = {
  cards: [],
  loading: false,
  error: null,
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false
        state.cards = action.payload
        state.error = null
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(addNewCard.fulfilled, (state, action) => {
        state.cards.push(action.payload)
        state.error = null
      })
      .addCase(removeExistingCard.fulfilled, (state, action) => {
        state.cards = state.cards.filter((card) => card.id !== action.payload)
        state.error = null
      })
  },
})

export default cardsSlice.reducer
