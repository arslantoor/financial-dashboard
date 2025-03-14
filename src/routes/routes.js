import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const Settings = lazy(() => import('../pages/Settings'))
const CreditCards = lazy(() => import('../pages/CreditCards'))
import LazyWrapper from '@/components/common/LazyWrapper.js'

export const routes = [
  { path: '/', element: LazyWrapper(Dashboard), index: true },
  { path: 'settings', element: LazyWrapper(Settings) },
  { path: 'transactions', element: <div>Transactions</div> },
  { path: 'accounts', element: <div>Accounts</div> },
  { path: 'investments', element: <div>Investments</div> },
  { path: 'credit-cards', element: LazyWrapper(CreditCards) },
  { path: 'loans', element: <div>Loans</div> },
  { path: 'services', element: <div>Services</div> },
  { path: 'privileges', element: <div>Privileges</div> },
  { path: '*', element: <div>Not Found</div> },
]
