import React from 'react'
import './CardItem.css'
import CardChip from './CardChip'
const CardItem = ({ card }) => {
  const { balance, cardHolder, validThru, cardNumber, type } = card

  const isDark = type === 'dark'

  return (
    <div className={`card ${isDark ? 'card-dark' : 'card-light'}`}>
      <div className="content-container h-[calc(100%-70px)]">
        <div className="card-section-top">
          <div>
            <p className={isDark ? 'text-label-dark' : 'text-label-light'}>Balance</p>
            <p className={`${isDark ? 'text-value-dark' : 'text-value-light'} text-balance`}>
              ${balance.toLocaleString()}
            </p>
          </div>

          <CardChip isDark={isDark} />
        </div>

        <div className="card-section-middle">
          <div>
            <p className={isDark ? 'text-label-dark' : 'text-label-light'}>CARD HOLDER</p>
            <p
              className={`text-xs sm:text-sm md:text-[15px] leading-tight ${isDark ? 'text-value-dark' : 'text-value-light'}`}
            >
              {cardHolder}
            </p>
          </div>

          <div>
            <p className={isDark ? 'text-label-dark' : 'text-label-light'}>VALID THRU</p>
            <p
              className={`text-xs sm:text-sm md:text-[15px] leading-tight ${isDark ? 'text-value-dark' : 'text-value-light'}`}
            >
              {validThru}
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          isDark
            ? 'card-section-bottom-dark h-[70px] content-center'
            : 'card-section-bottom-light h-[70px] content-center'
        }
      >
        <div className="flex justify-between items-center">
          <p className={`${isDark ? 'text-value-dark' : 'text-value-light'} text-card-number mt-0`}>
            {cardNumber}
          </p>
          <div className="card-circles">
            <div className={isDark ? 'card-circle-dark' : 'card-circle-light'}></div>
            <div className={isDark ? 'card-circle-dark' : 'card-circle-light'}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
