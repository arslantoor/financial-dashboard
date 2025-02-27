import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards, addNewCard, removeExistingCard } from '../store/slices/cardsSlice'

export const useCards = () => {
  const dispatch = useDispatch()
  const { cards, loading, error } = useSelector((state) => state.cards)

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  const addCard = (card) => {
    dispatch(addNewCard(card))
  }

  const removeCard = (id) => {
    dispatch(removeExistingCard(id))
  }

  return {
    cards,
    loading,
    error,
    addCard,
    removeCard,
  }
}
