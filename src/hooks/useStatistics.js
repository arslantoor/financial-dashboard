import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStatistics } from '../store/slices/statisticsSlice'

export const useStatistics = () => {
  const dispatch = useDispatch()
  const { weeklyActivity, expenseStatistics, balanceHistory, loading, error } = useSelector(
    (state) => state.statistics
  )

  useEffect(() => {
    dispatch(fetchStatistics())
  }, [dispatch])

  return {
    weeklyActivity,
    expenseStatistics,
    balanceHistory,
    loading,
    error,
  }
}
