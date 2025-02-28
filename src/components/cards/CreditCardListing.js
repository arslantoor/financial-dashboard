import Tooltip from '@/components/common/tooltip/Tooltip.js'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardItem from './CardItem'

const CreditCards = ({ cards }) => {
  const navigate = useNavigate()
  return (
    <div className="md:col-span-1 lg:col-span-2">
      <div className="flex justify-between items-center mb-2 sm:mb-3">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">My Cards</h2>
        <Tooltip text="View all cards" position="bottom">
          <button
            onClick={() => navigate('/credit-cards')}
            className="text-base text-blue-600 hover:text-blue-700 transition"
          >
            See All
          </button>
        </Tooltip>
      </div>
      <div className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6">
        {cards.slice(0, 2).map((card) => (
          <div key={card.id} className="w-[50%] min-w-[265px] md:min-w-[350px]">
            <CardItem card={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreditCards
