const API_URL = `${import.meta.env.VITE_API_URL || ''}`

export const api = {
  // User endpoints
  getCurrentUser: async () => {
    const response = await fetch(`${API_URL}/currentUser`)
    return response.json()
  },
  updateUser: async (userData) => {
    const response = await fetch(`${API_URL}/currentUser`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    return response.json()
  },

  // Contacts endpoints
  getContacts: async () => {
    const response = await fetch(`${API_URL}/contacts`)
    return response.json()
  },
  addContact: async (contact) => {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    })
    return response.json()
  },
  deleteContact: async (id) => {
    await fetch(`${API_URL}/contacts/${id}`, { method: 'DELETE' })
    return id
  },

  // Cards endpoints
  getCards: async () => {
    const response = await fetch(`${API_URL}/cards`)
    return response.json()
  },
  addCard: async (card) => {
    const response = await fetch(`${API_URL}/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card),
    })
    return response.json()
  },
  deleteCard: async (id) => {
    await fetch(`${API_URL}/cards/${id}`, { method: 'DELETE' })
    return id
  },

  // Transactions endpoints
  getTransactions: async () => {
    const response = await fetch(`${API_URL}/transactions`)
    return response.json()
  },
  addTransaction: async (transaction) => {
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    })
    return response.json()
  },

  // Statistics endpoints
  getStatistics: async () => {
    const response = await fetch(`${API_URL}/statistics`)
    return response.json()
  },
}
