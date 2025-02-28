import { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'

// Register all Chart.js components
Chart.register(...registerables)

const LineChartComponent = ({ data, title }) => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    // If a chart instance exists, destroy it before creating a new one
    if (chartInstance.current instanceof Chart) {
      chartInstance.current.destroy()
      chartInstance.current = null // Prevent stale reference
    }

    // Get the canvas context
    const ctx = chartRef.current.getContext('2d')

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Balance',
            data: data.data,
            borderColor: '#4F46E5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 800,
            ticks: {
              stepSize: 200,
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
            border: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
                family: "'Inter', sans-serif",
              },
            },
          },
        }
      },
    })

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current instanceof Chart) {
        chartInstance.current.destroy()
        chartInstance.current = null // Prevent stale reference
      }
    }
  }, [data])
  const cardStyle = 'bg-white rounded-[25px] border border-lightBorder shadow-sm'

  return (
    <div className="w-full overflow-hidden">
      <h3 className="ttext-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className={`${cardStyle} h-auto md:h-[275px] w-full p-1 md:p-3`}>
        <canvas ref={chartRef} />
      </div>
    </div>
  )
}

export default LineChartComponent
