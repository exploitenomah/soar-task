import * as d3 from "d3"
import { useRef, useEffect } from "react"
import { DataPoint } from "../../../redux/slices/dashboard.slice"


export default function LineChart({
  data,
  xAxisKey,
  dataKey,
  getHeight
}: {
  data: DataPoint[]
  xAxisKey: keyof DataPoint
  dataKey: keyof DataPoint
  getHeight: (isMobile: boolean) => number
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    const updateChart = () => {
      const containerWidth = containerRef.current?.clientWidth || 700
      const isMobile = containerWidth < 768
      const containerHeight = getHeight(isMobile)

      const margin = {
        top: 20,
        right: isMobile ? 20 : 30,
        bottom: 30,
        left: isMobile ? 40 : 50,
      }

      const svg = d3.select(svgRef.current)
      svg.selectAll("*").remove()

      svg
        .attr("width", "100%")
        .attr("height", containerHeight)
        .attr("viewBox", `0 0 ${containerWidth} ${containerHeight}`)
        .attr("preserveAspectRatio", "xMidYMid meet")

      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d[xAxisKey] as string))
        .range([margin.left, containerWidth - margin.right])
        .padding(0.1)

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d[dataKey] as number) || 0])
        .range([containerHeight - margin.bottom, margin.top])
        .nice()

      const line = d3
        .line<DataPoint>()
        .x((d) => (xScale(d[xAxisKey] as string) || 0) + xScale.bandwidth() / 2)
        .y((d) => yScale(d[dataKey] as number))
        .curve(d3.curveMonotoneX)

      svg
        .append("g")
        .attr("class", "grid horizontal")
        .selectAll("line")
        .data(yScale.ticks(5))
        .enter()
        .append("line")
        .attr("x1", margin.left)
        .attr("x2", containerWidth - margin.right)
        .attr("y1", (d) => yScale(d))
        .attr("y2", (d) => yScale(d))
        .attr("stroke", "#DFE5EE")
        .attr("stroke-width", 1.5)
        .attr("stroke-dasharray", "4,4")
      svg
        .append("g")
        .attr("class", "grid vertical")
        .selectAll("line")
        .data(data.map((d) => d.month))
        .enter()
        .append("line")
        .attr("x1", (d) => (xScale(d as string) || 0) + xScale.bandwidth() / 2)
        .attr("x2", (d) => (xScale(d as string) || 0) + xScale.bandwidth() / 2)
        .attr("y1", margin.top)
        .attr("y2", containerHeight - margin.bottom)
        .attr("stroke", "#DFE5EE")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "4,4")

      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale).ticks(5).tickSize(0))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .selectAll("text")
            .style("font-size", isMobile ? "12px" : "14px")
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
            .style("font-size", isMobile ? "12px" : "14px")
            .style("font-family", "Inter, sans-serif")
            .style("fill", "#718EBF")
            .attr("dy", "1.5em"),
        )

      const tooltip = d3
        .select(containerRef.current)
        .append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background", "#396AFF")
        .style("color", "white")
        .style("padding", "8px")
        .style("border-radius", "6px")
        .style("font-size", isMobile ? "12px" : "14px")
        .style("font-family", "Inter, sans-serif")
        .style("pointer-events", "none")
        .style("z-index", "10")

      const path = svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#1814F3")
        .attr("stroke-width", 2)
        .attr("d", line)

      const areaGenerator = d3
        .area<DataPoint>()
        .x((d) => (xScale(d[xAxisKey] as string) || 0) + xScale.bandwidth() / 2)
        .y0(containerHeight - margin.bottom)
        .y1((d) => yScale(d[dataKey] as number))
        .curve(d3.curveMonotoneX)

      const gradient = svg
        .append("defs")
        .append("linearGradient")
        .attr("id", "area-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0)
        .attr("y1", yScale(0))
        .attr("x2", 0)
        .attr("y2", yScale(d3.max(data, (d) => d[dataKey] as number) || 0))

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#2D60FF80")
        .attr("stop-opacity", 0.3)

      gradient
        .append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#2D60FF")
        .attr("stop-opacity", 0)

      svg.append("path").datum(data).attr("fill", "url(#area-gradient)").attr("d", areaGenerator)

      const dots = svg
        .selectAll(".dot-hover-area")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot-hover-area")
        .attr("cx", (d) => (xScale(d[xAxisKey] as string) || 0) + xScale.bandwidth() / 2)
        .attr("cy", (d) => yScale(d[dataKey] as number))
        .attr("r", 10)
        .attr("fill", "transparent")
        .style("cursor", "pointer")

      const visibleDots = svg
        .selectAll(".dot-visible")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dot-visible")
        .attr("cx", (d) => (xScale(d[xAxisKey] as string) || 0) + xScale.bandwidth() / 2)
        .attr("cy", (d) => yScale(d[dataKey] as number))
        .attr("r", 4)
        .attr("fill", "#396AFF")
        .attr("stroke", "#FFFFFF")
        .attr("stroke-width", 2)
        .style("opacity", 0)

      dots
        .on("mouseover", function (event, d) {
          const [mouseX, mouseY] = d3.pointer(event)

          tooltip
            .style("visibility", "visible")
            .html(`${d[xAxisKey]}: $${d[dataKey]}`)
            .style("left", `${mouseX + 10}px`)
            .style("top", `${mouseY - 10}px`)

          visibleDots
            .filter((data) => data === d)
            .transition()
            .duration(200)
            .style("opacity", 1)

          path.style("stroke-width", "3")
        })
        .on("mouseout", function () {
          tooltip.style("visibility", "hidden")

          visibleDots.transition().duration(200).style("opacity", 0)

          path.style("stroke-width", "2")
        })

      const pathLength = path.node()?.getTotalLength() || 0
      path
        .attr("stroke-dasharray", pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        .duration(2000)
        .attr("stroke-dashoffset", 0)
    }

    updateChart()

    const resizeObserver = new ResizeObserver(() => {
      updateChart()
    })

    resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full relative">
      <svg ref={svgRef}></svg>
    </div>
  )
}
