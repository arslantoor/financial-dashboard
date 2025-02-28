import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions, addNewTransaction } from '../store/slices/transactionsSlice'

export const useTransactions = () => {
  const dispatch = useDispatch()
  const { transactions, loading, error } = useSelector((state) => state.transactions)

  useEffect(() => {
    dispatch(fetchTransactions())
  }, [dispatch])

  const addTransaction = (transaction) => {
    dispatch(addNewTransaction(transaction))
  }

  return {
    transactions,
    loading,
    error,
    addTransaction,
  }
}
