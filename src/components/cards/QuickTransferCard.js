import Tooltip from '@/components/common/tooltip/Tooltip.js'
import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { toast } from 'react-toastify'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import QuickTransferContact from './QuickTransferContact'
import '../../styles/slick-custom.css'

const QuickTransferCard = ({ contacts, cardStyle }) => {
  const [amount, setAmount] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedContact, setSelectedContact] = useState(null)

  const inputRef = useRef(null)
  const sliderRef = useRef(null)

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
    >
      <Icon icon="material-symbols:chevron-right-rounded" className="w-6 h-6 text-gray-600" />
    </button>
  )

  const CustomPrevArrow = ({ onClick }) =>
    currentSlide > 0 ? (
      <button
        onClick={onClick}
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
      >
        <Icon icon="material-symbols:chevron-left-rounded" className="w-6 h-6 text-gray-600" />
      </button>
    ) : null

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    arrows: true,
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 10,
    useCSS: true,
    useTransform: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleSend = () => {
    if (!amount || !selectedContact) {
      toast.error(
        !amount && !selectedContact
          ? 'Please select a contact and enter an amount'
          : !amount
            ? 'Please enter an amount'
            : 'Please select a contact'
      )
      return
    }
    toast.success(`${amount} Transfer successful to ${selectedContact.name}`)
    setAmount('')
    setSelectedContact(null)
  }

  return (
    <div className="w-full d-flex flex-col">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Quick Transfer
      </h2>
      <div
        className={`${cardStyle} flex flex-col justify-center h-[275px] p-3 sm:p-4 md:p-6 w-full relative`}
      >
        <div className="mb-3 sm:mb-4 md:mb-6">
          <div className="relative">
            <div className="overflow-hidden">
              <Slider key={contacts.length} ref={sliderRef} {...settings}>
                {contacts.map((contact) => {
                  const isSelected = selectedContact?.id === contact.id
                  return (
                    <div
                      onClick={(e) => {
                        e.preventDefault()

                        setSelectedContact(isSelected ? null : contact)
                      }}
                      key={contact.id}
                      className="outline-none z-10 cursor-pointer"
                    >
                      <QuickTransferContact selected={isSelected} contact={contact} />
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-1.5">
          <span
            className="text-primary-400 text-sm font-light"
            onClick={() => inputRef.current.focus()}
          >
            Write Amount
          </span>
          <div className="flex items-center space-x-1.5 h-[50px] w-[225px] lg:w-[265px]">
            <div className="z-5 w-[calc(70%+30px)] relative -right-[30px]">
              <input
                type="number"
                ref={inputRef}
                value={amount}
                placeholder="525.50"
                aria-label="Amount input"
                onChange={(e) => setAmount(e.target.value)}
                className="w-full h-10 px-[30px] bg-[#F8F9FA] rounded-full text-sm focus:outline-none"
              />
            </div>
            <Tooltip text="Send Transation to selected user" position="top">
              <button
                onClick={handleSend}
                className="w-50 z-10 h-10 px-4 bg-[#1A1A1A] text-white rounded-full flex items-center space-x-1 hover:bg-black transition-colors"
              >
                <span className="text-sm mr-1">Send</span>

                <Icon icon="fa-regular:paper-plane" className="w-4 h-4" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickTransferCard
