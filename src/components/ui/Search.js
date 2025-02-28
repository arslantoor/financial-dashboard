const Search = ({ placeholder = 'Search for something', className = '' }) => {
  return (
    <div className={`search-container ${className}`}>
      <input type="text" placeholder={placeholder} className="search-input" />
      <div className="search-icon">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  )
}

export default Search
