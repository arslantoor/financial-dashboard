import './DateOfBirthInput.css'

const DateOfBirthInput = ({ label, name, value, onChange }) => {
  const formatDateForInput = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) return ''
    return date.toISOString().split('T')[0]
  }

  const handleDateChange = (e) => {
    const { value } = e.target
    const date = new Date(value)
    if (!isNaN(date.getTime())) {
      const formattedDate = `${date.getDate()} ${date.toLocaleString('default', {
        month: 'long',
      })} ${date.getFullYear()}`
      onChange({ target: { name, value: formattedDate } })
    }
  }

  const maxDate = new Date().toISOString().split('T')[0]

  return (
    <div>
      {label && <label className="block text-sm text-gray-600 mb-1">{label}</label>}
      <div className="relative">
        <input
          type="date"
          name={name}
          value={formatDateForInput(value)}
          onChange={handleDateChange}
          className="w-full h-[50px] px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 bg-white appearance-none text-[#718EBF] font-[Inter] text-[12px] md:text-[15px] font-normal leading-normal"
          max={maxDate} // Prevent future dates
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DateOfBirthInput
