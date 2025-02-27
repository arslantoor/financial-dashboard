import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { useInitialData } from './hooks/useInitialData'
import { routes } from './routes/routes'

function App() {
  useInitialData()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.index ? undefined : route.path}
            index={route.index}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
