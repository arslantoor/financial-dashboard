import React, { useState, useRef, useEffect, cloneElement } from 'react'
import { createPortal } from 'react-dom'

const Tooltip = ({ children, text, position = 'top' }) => {
  const [visible, setVisible] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const tooltipRef = useRef(null)

  useEffect(() => {
    if (!tooltipRef.current) return

    const showTooltip = () => {
      const rect = tooltipRef.current.getBoundingClientRect()
      setCoords(getTooltipPosition(rect))
      setVisible(true)
    }

    const hideTooltip = () => setVisible(false)

    tooltipRef.current.addEventListener('mouseenter', showTooltip)
    tooltipRef.current.addEventListener('mouseleave', hideTooltip)

    return () => {
      tooltipRef.current?.removeEventListener('mouseenter', showTooltip)
      tooltipRef.current?.removeEventListener('mouseleave', hideTooltip)
    }
  }, [])

  const getTooltipPosition = (rect) => {
    switch (position) {
      case 'top':
        return { top: rect.top - 40, left: rect.left + rect.width / 2 }
      case 'bottom':
        return { top: rect.bottom + 10, left: rect.left + rect.width / 2 }
      default:
        return { top: rect.top, left: rect.left }
    }
  }

  return (
    <>
      {cloneElement(children, { ref: tooltipRef })}

      {visible &&
        createPortal(
          <div
            className="bg-black text-white text-xs px-2 py-1 rounded-md shadow-lg transition-opacity duration-300 opacity-100 transform -translate-x-1/2 z-[9999]"
            style={{
              position: 'absolute',
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              pointerEvents: 'none',
            }}
          >
            {text}
            <div
              className={`absolute w-2 h-2 bg-black rotate-45 ${
                position === 'top' ? 'bottom-[-3px]' : 'top-[-3px]'
              } left-1/2 transform -translate-x-1/2`}
            />
          </div>,
          document.body
        )}
    </>
  )
}

export default Tooltip
