import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './slices/cardsSlice'
import transactionsReducer from './slices/transactionsSlice'
import statisticsReducer from './slices/statisticsSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    transactions: transactionsReducer,
    statistics: statisticsReducer,
    user: userReducer,
  },
})
