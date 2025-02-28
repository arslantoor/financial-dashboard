import React, { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

// Register all Chart.js components
Chart.register(...registerables)

const BarChartComponent = ({ data, title }) => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)
  const isMobile = window.innerWidth < 768

  useEffect(() => {
    // If a chart instance exists, destroy it before creating a new one
    if (!data || !data.labels || !data.datasets) return

    // Destroy existing chart before creating a new one
    if (chartInstance.current instanceof Chart) {
      chartInstance.current.destroy()
      chartInstance.current = null // Prevent stale reference
    }

    // Get the canvas context
    const ctx = chartRef.current.getContext('2d')

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: data.datasets.map((dataset) => ({
          ...dataset,
          borderRadius: 5,
          maxBarThickness: isMobile ? 8 : 15,
          borderSkipped: false,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              boxHeight: 8,
              boxWidth: 13,
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 8,
              font: {
                size: 12,
                family: "'Inter', sans-serif",
              },
            },
          },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: {
              size: 12,
              family: "'Inter', sans-serif",
            },
            bodyFont: {
              size: 12,
              family: "'Inter', sans-serif",
            },
            padding: 10,
            cornerRadius: 4,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 500,
            ticks: {
              stepSize: 100,
              font: {
                size: 12,
                family: "'Inter', sans-serif",
              },
              padding: 10,
            },
            grid: {
              color: '#F3F4F6',
              drawBorder: false,
              lineWidth: 1,
            },
            border: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
                family: "'Inter', sans-serif",
              },
              padding: 5,
            },
            border: {
              display: false,
            },
          },
        }
      },
    })

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current instanceof Chart) {
        chartInstance.current.destroy()
        chartInstance.current = null
      }
    }
  }, [data, isMobile])
  const cardStyle = 'bg-white rounded-[25px] border border-lightBorder shadow-sm'

  return (
    <div className="w-full overflow-hidden md:col-span-2 sm:col-span-3">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className={`${cardStyle} h-auto py-2 md:p-4 md:h-[320px] w-full flex items-center justify-center`}>
        <canvas className='w-full' ref={chartRef} />
      </div>
    </div>
  )
}

export default BarChartComponent