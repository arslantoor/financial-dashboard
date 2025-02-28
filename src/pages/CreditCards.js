import CardItem from '../components/cards/CardItem'
import { useCards } from '../hooks/useCards'

const CreditCards = () => {
  const { cards, loading, error } = useCards()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading credit cards: {error}</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`animate-${['slide-up', 'slide-down'][index % 2]} min-w-[265px] md:min-w-[350px]`}
          >
            <CardItem card={card} />
          </div>
        ))}
      </div>

      {cards.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No credit cards found</p>
        </div>
      )}
    </div>
  )
}

export default CreditCards
