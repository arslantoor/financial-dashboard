import { Icon } from '@iconify/react'
const CardChip = ({ isDark }) => {
  return (
    <div className="card-chip">
      <Icon
        icon="wpf:sim-card-chip"
        className={`w-full h-full ${isDark ? 'text-white' : 'text-gray-600'}`}
      />
    </div>
  )
}

export default CardChip
