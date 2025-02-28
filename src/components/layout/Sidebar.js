import { NavLink, useLocation } from 'react-router-dom'
import { navItems } from './NavItems'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()

  return (
    <>
      <div
        className={`fixed z-50 inset-0 bg-gray-600 bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed z-50 lg:sticky top-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 lg:transform-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex px-4 items-center justify-center my-8">
            <div className="flex items-center gap-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M21.8749 2.91667C22.3869 2.91668 22.8898 3.05146 23.3332 3.30745C23.7766 3.56344 24.1448 3.93162 24.4008 4.375H26.2499C27.0235 4.375 27.7653 4.68229 28.3123 5.22927C28.8593 5.77625 29.1666 6.51812 29.1666 7.29167V24.7917C29.1666 26.7255 28.3984 28.5802 27.0309 29.9477C25.6635 31.3151 23.8088 32.0833 21.8749 32.0833H8.74992C7.97637 32.0833 7.2345 31.776 6.68752 31.2291C6.14054 30.6821 5.83325 29.9402 5.83325 29.1667V7.29167C5.83325 6.51812 6.14054 5.77625 6.68752 5.22927C7.2345 4.68229 7.97637 4.375 8.74992 4.375H10.5991C10.8551 3.93162 11.2233 3.56344 11.6666 3.30745C12.11 3.05146 12.6129 2.91668 13.1249 2.91667H21.8749ZM21.6183 13.6777L15.432 19.8654L13.3685 17.8019C13.0934 17.5362 12.725 17.3892 12.3427 17.3926C11.9603 17.3959 11.5945 17.5493 11.3241 17.8196C11.0538 18.09 10.9004 18.4558 10.8971 18.8382C10.8937 19.2205 11.0407 19.5889 11.3064 19.864L14.296 22.855C14.4449 23.004 14.6218 23.1223 14.8165 23.2029C15.0112 23.2836 15.2198 23.3251 15.4305 23.3251C15.6413 23.3251 15.8499 23.2836 16.0446 23.2029C16.2393 23.1223 16.4162 23.004 16.5651 22.855L23.6818 15.7398C23.8172 15.6043 23.9246 15.4435 23.9978 15.2665C24.0711 15.0895 24.1087 14.8998 24.1087 14.7082C24.1086 14.5167 24.0708 14.327 23.9974 14.1501C23.9241 13.9731 23.8166 13.8124 23.6811 13.677C23.5456 13.5416 23.3847 13.4342 23.2077 13.361C23.0307 13.2877 22.8411 13.2501 22.6495 13.2501C22.458 13.2502 22.2683 13.288 22.0914 13.3614C21.9144 13.4347 21.7537 13.5422 21.6183 13.6777ZM21.1458 5.83333H13.8541C13.6834 5.83328 13.5181 5.89308 13.387 6.00234C13.2559 6.1116 13.1673 6.26338 13.1366 6.43125L13.1249 6.5625V8.02083C13.1249 8.1915 13.1847 8.35677 13.2939 8.48788C13.4032 8.61899 13.555 8.70762 13.7228 8.73833L13.8541 8.75H21.1458C21.3164 8.75006 21.4817 8.69025 21.6128 8.581C21.7439 8.47174 21.8325 8.31996 21.8633 8.15208L21.8749 8.02083V6.5625C21.875 6.39184 21.8152 6.22656 21.7059 6.09546C21.5967 5.96435 21.4449 5.87572 21.277 5.845L21.1458 5.83333Z"
                  fill="#232323"
                />
              </svg>
              <h1 className="text-[25px] font-extrabold text-[#343C6A] font-inter">Soar Task</h1>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {navItems.map(({ to, label, icon }) => {
              const isActive = location.pathname === to
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={`flex h-[60px] transition-colors duration-300 ease-in-out ${
                    isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'
                  } rounded-lg`}
                  end={to === '/'}
                >
                  {isActive && <div className="w-[6px] h-full rounded-r-[10px] bg-[#232323]" />}
                  <div
                    className={`flex items-center gap-[26px] ml-11 transition-all duration-300 ease-in-out ${
                      isActive ? 'pl-0' : 'pl-[6px]'
                    }`}
                  >
                    {icon(isActive)}
                    {label}
                  </div>
                </NavLink>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
