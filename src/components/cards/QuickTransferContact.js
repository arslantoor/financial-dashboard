
const QuickTransferContact = ({ contact, selected }) => {
  const { avatar, name = 'Unknown', role = 'N/A' } = contact

  return (
    <div className="group w-[100px] cursor-pointer text-center justify-items-center">
      <img
        src={avatar || '/default-avatar.png'}
        className="w-[70px] h-[70px] rounded-full border-2 border-white mb-2 object-cover"
        alt={name}
      />
      <div className="flex flex-col items-center w-full">
        <p className={`text-[#232323] font-inter text-[16px] leading-normal transition-all duration-200 truncate max-w-full ${selected ? 'font-bold' : 'group-hover:font-medium'}`}>
          {name}
        </p>
        <p className={`text-[#718EBF] font-inter text-[15px] leading-normal transition-all duration-200 truncate max-w-full ${selected ? 'font-bold' : 'group-hover:font-medium'}`}>
          {role}
        </p>
      </div>
    </div>
  )
}

export default QuickTransferContact
