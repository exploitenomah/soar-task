import * as d3 from "d3"
import { useRef, useEffect } from "react"
import { DataPoint } from "../../../redux/slices/dashboard.slice"

export default function BarChart({
  width = 700,
  height = 320,
  data,
  xAxisKey,
  barsKeys,
  colors,
}: {
  data: DataPoint[]
  width?: number
  height?: number
  xAxisKey: keyof DataPoint
  barsKeys: (keyof DataPoint)[]
  colors: { [x: keyof DataPoint]: string }
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return
    
    const updateChart = () => {
      const isMobile = window.innerWidth <= 600
      const containerWidth = containerRef.current?.clientWidth || width
      const containerHeight = Math.min(height, containerWidth * 0.6)

      const margin = {
        top: 30,
        right: containerWidth < 400 ? 20 : 30,
        bottom: 30,
        left: containerWidth < 400 ? 30 : 40,
      }

      const svg = d3.select(svgRef.current)
      svg.selectAll("*").remove()

      svg
        .attr("width", "100%")
        .attr("height", containerHeight)
        .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)

      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d[xAxisKey as keyof typeof d] as string))
        .range([margin.left, containerWidth - margin.right])
        .padding(0.4)

      const maxValuesOfBarKeys = barsKeys.map((key) => d3.max(data, (d) => d[key] as number) || 0)
      const maxValue = Math.ceil(Math.max(...maxValuesOfBarKeys) / 100) * 100

      const yScale = d3
        .scaleLinear()
        .domain([0, maxValue])
        .range([containerHeight - margin.bottom, margin.top])
        .nice()

      svg
        .append("g")
        .attr("class", "grid")
        .selectAll("line")
        .data(yScale.ticks(5))
        .enter()
        .append("line")
        .attr("x1", margin.left)
        .attr("x2", containerWidth - margin.right)
        .attr("y1", (d) => yScale(d))
        .attr("y2", (d) => yScale(d))
        .attr("stroke", "#DFE5EE")
        .attr("stroke-width", 1)
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale).ticks(5).tickSize(0))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .selectAll("text")
            .style("font-size", containerWidth < 400 ? "10px" : "12px")
            .style("font-family", "Inter, sans-serif")
            .style("fill", "#718EBF")
            .attr("dx", "-5"),
        )
      svg
        .append("g")
        .attr("transform", `translate(0,${containerHeight - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickSize(0))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .selectAll("text")
            .style("font-size", containerWidth < 400 ? "10px" : "12px")
            .style("font-family", "Inter, sans-serif")
            .style("fill", "#718EBF")
            .attr("dy", "1.5em"),
        )
      const barWidth = xScale.bandwidth() / 4
      const barRadius = containerWidth < 400 ? 3 : 6

      const tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("position", "fixed")
        .style("visibility", "hidden")
        .style("color", "white")
        .style("padding", "8px")
        .style("border-radius", "6px")
        .style("font-size", containerWidth < 400 ? "12px" : "14px")
        .style("font-family", "Inter, sans-serif")
        .style("pointer-events", "none")
        .style("z-index", "10")
        .style("transform", "translate(-50%, -100%)")
        .style("white-space", "nowrap")
      const bars = barsKeys.map((barKey, idx) => ({
        barKey,
        bar: svg
          .selectAll(`.bar.${barKey}`)
          .data(data)
          .enter()
          .append("rect")
          .attr("class", `bar ${barKey}`)
          .attr(
            "x",
            (d) =>
              (xScale(d[xAxisKey] as string) ?? 0) + barWidth + (isMobile ? 10 * idx : 20 * idx),
            //  (xScale(d[xAxisKey] as string) ?? 0) + barWidth + (!isMobile ? -100 : 20 * idx),
          )
          .attr("y", containerHeight - margin.bottom)
          .attr("width", barWidth)
          .attr("height", 0)
          .attr("fill", colors[barKey])
          .attr("rx", barRadius)
          .attr("ry", barRadius)
          .style("cursor", "pointer"),
      }))

      bars.forEach((bar) => {
        bar.bar
          .transition()
          .duration(1000)
          .ease(d3.easeElastic)
          .attr("y", (d) => yScale(d[bar.barKey] as number))
          .attr("height", (d) => containerHeight - margin.bottom - yScale(d[bar.barKey] as number))
      })

      bars.forEach((bar) => {
        bar.bar
          .on("mouseover", function (_event, d) {
            const svgNode = svg.node()
            if (!svgNode) return

            const svgRect = svgNode.getBoundingClientRect()
            const xPos = svgRect.left + (xScale(d[xAxisKey] as string) ?? 0) + barWidth / 2
            const yPos = svgRect.top + yScale(d[bar.barKey] as number)

            tooltip
              .style("visibility", "visible")
              .style("background", colors[bar.barKey])
              .html(`${d.day}<br/>${bar.barKey}: $${d[bar.barKey]}`)
              .style("left", `${xPos}px`)
              .style("top", `${yPos}px`)

            d3.select(this)
              .transition()
              .duration(200)
              .attr(
                "fill",
                d3.color(colors[bar.barKey])?.brighter(0.5)?.toString() || colors[bar.barKey],
              )
          })
          .on("mouseout", function () {
            tooltip.style("visibility", "hidden")
            d3.select(this).transition().duration(200).attr("fill", colors[bar.barKey])
          })
      })

      const legendX = containerWidth < 400 ? containerWidth - 150 : containerWidth - 200
      const legend = svg.append("g").attr("transform", `translate(${legendX}, ${margin.top})`)

      barsKeys.forEach((barKey, idx) => {
        legend
          .append("circle")
          .attr("cx", -25 + 95 * idx)
          .attr("cy", -12)
          .attr("r", containerWidth < 400 ? 4 : 5)
          .attr("fill", colors[barKey])
        legend
          .append("text")
          .attr("x", -10 + 95 * idx)
          .attr("y", -8)
          .text(barKey)
          .style("font-size", containerWidth < 400 ? "10px" : "12px")
          .style("font-family", "Inter, sans-serif")
          .style("fill", "#718EBF")
          .style("text-transform", "capitalize")
      })
      return () => {
        tooltip.remove()
      }
    }

    updateChart()

    const resizeObserver = new ResizeObserver(() => {
      updateChart()
    })

    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [width, height])

  return (
    <div ref={containerRef} className="w-full h-full">
      <svg ref={svgRef}></svg>
    </div>
  )
}
