import * as d3 from "d3"
import { useRef, useEffect } from "react"

type PieObjectData = { [x: string]: string | number; color: string }

export default function PieChart({
  data,
  percentageKey,
  textKey,
  width = 280,
}: {
  data: PieObjectData[]
  percentageKey: keyof PieObjectData
  textKey: keyof PieObjectData
  width?: number
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pieDataWithIdxKey = data.map((d, idx): PieObjectData => ({ ...d, idx }))

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    const updateChart = () => {
      const containerWidth = (containerRef.current?.clientWidth || width) - 16
      const isMobile = containerWidth <= 400

      const pieWidth = containerWidth
      const pieHeight = containerWidth
      const radius = (Math.min(pieWidth, pieHeight) / 2) * 0.85

      const desiredGap = isMobile ? 6.4 : 8.5
      const padAngle = (desiredGap / radius) * 1.5

      const svg = d3.select(svgRef.current)
      svg.selectAll("*").remove()

      const pie = d3
        .pie<(typeof pieDataWithIdxKey)[0]>()
        .value((d) => d[percentageKey] as number)
        .sort(null)
        .padAngle(padAngle)

      const arc = d3
        .arc<d3.PieArcDatum<(typeof pieDataWithIdxKey)[0]>>()
        .innerRadius(6)
        .outerRadius((d) => {
          const calculatedRadius = radius - Number(d.data.idx) * 5
          return (d.data[percentageKey] as number) < 20
            ? (((radius * 19) / Number(d.data[percentageKey])) as number)
            : calculatedRadius + (isMobile ? 8 : 50)
        })
        .cornerRadius(4)

      svg.attr("width", width).attr("height", pieHeight).attr("viewBox", `0 0 ${width} ${pieHeight}`)

      const g = svg.append("g").attr("transform", `translate(${width / 2},${pieHeight / 2})`)

      g.selectAll("path")
        .data(pie(pieDataWithIdxKey))
        .enter()
        .append("path")
        .attr("d", (d) => {
          const startArc = d3
            .arc<d3.PieArcDatum<(typeof pieDataWithIdxKey)[0]>>()
            .innerRadius(6)
            .outerRadius(6)
            .cornerRadius(4)
          return startArc(d) || ""
        })
        .attr("fill", (d) => d.data.color)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .transition()
        .duration(1000)
        .ease(d3.easeElastic)
        .attrTween("d", function (d) {
          const interpolate = d3.interpolate(
            { startAngle: d.startAngle, endAngle: d.startAngle },
            { startAngle: d.startAngle, endAngle: d.endAngle },
          )
          return function (t) {
            const currentArcData = interpolate(t)
            return (
              arc({
                ...d,
                startAngle: currentArcData.startAngle,
                endAngle: currentArcData.endAngle,
              }) || ""
            )
          }
        })

      g.selectAll("text")
        .data(pie(pieDataWithIdxKey))
        .enter()
        .append("g")
        .attr("transform", (d) => {
          const isOffset = Number(d.data[percentageKey]) < 20
          const [x, y] = arc.centroid(d)
          const factor = isOffset ? 1.15 : 1
          return `translate(${x * factor},${y * factor})`
        })
        .style("opacity", 0)
        .each(function (d) {
          d3.select(this)
            .append("text")
            .attr("dy", "2em")
            .attr("dx", ".8em")
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .style("font-family", "Inter")
            .style("font-size", isMobile ? "11px" : "16px")
            .style("font-weight", "700")
            .style("line-height", isMobile ? "14.52px" : "18px")
            .style("letter-spacing", "0%")
            .style("transform", "rotate(15deg)")
            .text(d.data[textKey])

          d3.select(this)
            .append("text")
            .attr("dy", ".7em")
            .attr("dx", ".5em")
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .style("font-family", "Inter")
            .style("font-size", isMobile ? "11px" : "13px")
            .style("font-weight", "700")
            .style("line-height", isMobile ? "14px" : "18px")
            .style("letter-spacing", "0%")
            .style("transform", "rotate(15deg)")
            .text(`${d.data[percentageKey]}%`)
        })
        .transition()
        .delay(500)
        .duration(500)
        .ease(d3.easeQuadOut)
        .style("opacity", 1)
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
    <div ref={containerRef} className="w-full">
      <svg ref={svgRef}></svg>
    </div>
  )
}
