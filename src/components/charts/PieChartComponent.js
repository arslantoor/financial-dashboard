import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const PieChartComponent = ({ data, title }) => {
  const chartRef = useRef(null)
  useEffect(() => {
    if (!chartRef.current || !data || data.length === 0) return

    // Clear any existing SVG
    d3.select(chartRef.current).selectAll('*').remove()

    const width = 320
    const height = 320

    // Create SVG
    const svg = d3.select(chartRef.current).attr('width', width).attr('height', height)

    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`)

    // Normalize angles (sum should be 360 degrees)
    const totalProfit = d3.sum(data, (d) => d.percentage)
    const angleScale = d3
      .scaleLinear()
      .domain([0, totalProfit])
      .range([0, 2 * Math.PI])

    let currentAngle = 240

    data.forEach((d) => {
      const angle = angleScale(d.percentage)
      const arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(d.profit * 4) // Scale profit to radius
        .startAngle(currentAngle)
        .endAngle(currentAngle + angle)

      // Add the segment
      g.append('path')
        .attr('d', arc)
        .attr('fill', d.color)
        .attr('stroke', '#fff')
        .attr('stroke-width', 5)

      // Calculate position for the text label
      const labelAngle = currentAngle + angle / 2
      const labelRadius = (d.profit * 4) / 2 // Position label at half the radius
      var labelX = Math.sin(labelAngle) * labelRadius + 5
      const labelY = -Math.cos(labelAngle) * labelRadius - 5 // tollerence for the label

      // Add category label
      g.append('text')
        .attr('transform', `translate(${labelX}, ${labelY})`)
        .attr('text-anchor', 'middle')
        .attr('dy', '1em')
        .attr('fill', '#fff')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .text(d.category)

      // Add profit label
      g.append('text')
        .attr('transform', `translate(${labelX}, ${labelY})`)
        .attr('text-anchor', 'middle')
        .attr('dy', '-0.5em')
        .attr('fill', '#fff')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .text(`${d.profit}%`)

      currentAngle += angle
    })
  }, [data])
  const cardStyle = 'bg-white rounded-[25px] border border-lightBorder shadow-sm'

  return (
    <div className="w-full overflow-hidden">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className={`${cardStyle} h-[320px] w-full flex items-center justify-center`}>
        <svg ref={chartRef} width="320px" height="320px" />
      </div>
    </div>
  )
}

export default PieChartComponent
