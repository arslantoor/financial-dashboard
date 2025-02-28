import React from 'react'
import TransactionItem from '../components/transactions/TransactionItem'
import BarChartComponent from '../components/charts/BarChartComponent'
import PieChartComponent from '../components/charts/PieChartComponent'
import LineChartComponent from '../components/charts/LineChartComponent'
import QuickTransferCard from '../components/cards/QuickTransferCard'
import CreditCardListing from '../components/cards/CreditCardListing'
import { useStatistics } from '../hooks/useStatistics'
import { useCards } from '../hooks/useCards'
import { useTransactions } from '../hooks/useTransactions'
import { useContacts } from '../hooks/useContacts'
import { Icon } from '@iconify/react'

const Dashboard = () => {
  const {
    weeklyActivity,
    expenseStatistics,
    balanceHistory,
    loading: statsLoading,
    error: statsError,
  } = useStatistics()
  const { cards, loading: cardsLoading } = useCards()
  const { transactions, loading: transactionsLoading } = useTransactions()
  const { contacts, loading: contactsLoading } = useContacts()
  if (statsLoading || cardsLoading || transactionsLoading || contactsLoading) {
    return (
      <div>
        {' '}
        <Icon
          icon="svg-spinners:270-ring"
          className="text-lg font-semibold animate-spin"
          width="50"
          height="50"
        />
      </div>
    )
  }

  if (statsError) {
    return <div>Error: {statsError}</div>
  }

  // Common card style class
  const cardStyle = 'bg-white rounded-[25px] border border-lightBorder shadow-sm'

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-[24px] animate-fade-in">
        <CreditCardListing cards={cards} />

        <div>
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Recent Transaction
            </h2>
          </div>
          <div className={`${cardStyle} h-[235px] w-full mt-3 sm:mt-0 overflow-hidden`}>
            <div className="p-[25px] md:p-6 space-y-[15px] h-full w-full overflow-y-auto custom-scrollbar">
              {transactions.map((transaction, index) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {!statsLoading && (
        <div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-[24px] animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          <BarChartComponent
            key={weeklyActivity.length}
            data={weeklyActivity}
            title="Weekly Activity"
          />
          <PieChartComponent
            key={expenseStatistics.length}
            data={expenseStatistics}
            title="Expense Statistics"
          />
        </div>
      )}
      {!statsLoading && (
        <div
          className="grid grid-cols-1 lg:grid-cols-[41.67%_58.33%] gap-3 sm:gap-4 md:gap-6 animate-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          <QuickTransferCard key={contacts.length} contacts={contacts} cardStyle={cardStyle} />
          <LineChartComponent
            key={balanceHistory.length}
            data={balanceHistory}
            title="Balance History"
          />
        </div>
      )}
    </div>
  )
}

export default Dashboard
