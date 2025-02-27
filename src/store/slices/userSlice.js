import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../services/api'

// Async thunks
export const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUser', async () => {
  return await api.getCurrentUser()
})

export const updateUserData = createAsyncThunk('user/updateUserData', async (userData) => {
  return await api.updateUser(userData)
})

export const fetchContacts = createAsyncThunk('user/fetchContacts', async () => {
  return await api.getContacts()
})

export const addNewContact = createAsyncThunk('user/addNewContact', async (contact) => {
  return await api.addContact(contact)
})

export const removeExistingContact = createAsyncThunk('user/removeExistingContact', async (id) => {
  return await api.deleteContact(id)
})

const initialState = {
  user: {},
  contacts: [],
  loading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
    },
    updateContact: (state, action) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id)
      if (index !== -1) {
        state.contacts[index] = { ...state.contacts[index], ...action.payload }
      }
    },
  },
  extraReducers: (builder) => {
    // Current user reducers
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // Update user reducers
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload
        state.error = null
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.error = action.error.message
      })

      // Contacts reducers
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload
        state.error = null
      })
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload)
        state.error = null
      })
      .addCase(removeExistingContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        state.error = null
      })
  },
})

export const { updateUser, addContact, removeContact, updateContact } = userSlice.actions

export default userSlice.reducer
