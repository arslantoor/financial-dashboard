import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentUser } from '../store/slices/userSlice'

export const useInitialData = () => {
  const dispatch = useDispatch()

  useEffect(() => dispatch(fetchCurrentUser()), [dispatch])
}
