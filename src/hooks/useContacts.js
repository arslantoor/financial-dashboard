import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts, addNewContact, removeExistingContact } from '../store/slices/userSlice'

export const useContacts = () => {
  const dispatch = useDispatch()
  const { contacts, loading, error } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const addContact = (contact) => {
    dispatch(addNewContact(contact))
  }

  const removeContact = (id) => {
    dispatch(removeExistingContact(id))
  }

  return {
    contacts,
    loading,
    error,
    addContact,
    removeContact,
  }
}
