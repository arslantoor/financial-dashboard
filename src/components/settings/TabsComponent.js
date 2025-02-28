const TabsComponent = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200 justify-items-center md:justify-items-start">
      <nav className="w-full flex justify-between sm:justify-evenly md:justify-start -mb-px gap-[10px] md:gap-[74px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pt-0 pb-1 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default TabsComponent
