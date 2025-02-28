import AppErrorBoundary from '@/components/error/ErrorBoundary'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { store } from './store/store'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppErrorBoundary>
          <App />
        </AppErrorBoundary>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
