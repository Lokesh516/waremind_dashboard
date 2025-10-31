/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function ThermoGaugeD3({
  height = 120,
  value = 80,
  label = "T",
  isPeak = false,
  index = 0,
}) {
  const svgRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const barWidth = 20;
    const stemX = 20;
    const stemY = 20;
    const capsuleSize = 18;
    const capsuleRadius = 10;
    const clampedValue = Math.max(0, Math.min(100, value));
    const fillHeight = (clampedValue / 100) * height;

    const capsuleY = stemY + height - (capsuleSize + 2);
    const gradientBottomY = stemY + (height - fillHeight);
    const topCircleY = stemY + 6;

    const touchesCapsule = gradientBottomY <= capsuleY;
    const touchesTopCircle = gradientBottomY <= topCircleY;

    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "thermoGradient")
      .attr("x1", "0%").attr("y1", "100%")
      .attr("x2", "0%").attr("y2", "0%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#f97316").attr("stop-opacity", 1);
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#fde68a").attr("stop-opacity", 0.6);

    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([stemY + height, stemY]);

    if (index === 0) {
      const yTicks = [0, 25, 50, 75, 100];
      yTicks.forEach(tick => {
        svg.append("text")
          .attr("x", 0)
          .attr("y", yScale(tick))
          .attr("text-anchor", "start")
          .attr("font-size", 10)
          .attr("fill", "#9ca3af")
          .text(tick);
      });
    }

    svg.append("rect")
      .attr("x", stemX)
      .attr("y", stemY)
      .attr("width", barWidth)
      .attr("height", height)
      .attr("rx", barWidth / 2)
      .attr("ry", barWidth / 2)
      .attr("fill", "#f3f4f6")
      .attr("stroke", "#d1d5db")
      .attr("stroke-width", 1);

    const tooltip = d3.select(containerRef.current).select(".tooltip");

    svg.append("rect")
      .attr("x", stemX)
      .attr("y", stemY + height)
      .attr("width", barWidth)
      .attr("height", 0)
      .attr("rx", barWidth / 2)
      .attr("ry", barWidth / 2)
      .attr("fill", "url(#thermoGradient)")
      .on("mouseover", function (event) {
        tooltip
          .style("opacity", 1)
          .html(`<strong>${label}</strong>: ${clampedValue}%`);
      })
      .on("mousemove", function (event) {
        const containerRect = containerRef.current.getBoundingClientRect();
        tooltip
          .style("left", `${event.clientX - containerRect.left + 10}px`)
          .style("top", `${event.clientY - containerRect.top - 30}px`);
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);
      })
      .transition()
      .duration(800)
      .ease(d3.easeCubicOut)
      .attr("y", gradientBottomY)
      .attr("height", fillHeight);

    svg.append("circle")
      .attr("cx", stemX + barWidth / 2)
      .attr("cy", topCircleY)
      .attr("r", 5)
      .attr("fill", touchesTopCircle ? "white" : "#d5d7daff")

    const lineStartY = stemY + 18;
    const lineEndY = capsuleY - 7;
    const whiteLineHeight = Math.max(0, lineEndY - gradientBottomY);
    const greyLineHeight = Math.max(0, gradientBottomY - lineStartY);

    svg.append("rect")
      .attr("x", stemX + barWidth / 2 - 1)
      .attr("y", gradientBottomY)
      .attr("width", 2)
      .attr("height", whiteLineHeight)
      .attr("fill", "white")
      .attr("opacity", 0.8);

    svg.append("rect")
      .attr("x", stemX + barWidth / 2 - 1)
      .attr("y", lineStartY)
      .attr("width", 2)
      .attr("height", greyLineHeight)
      .attr("fill", "#d1d5db")
      .attr("opacity", 0.4);

    if (isPeak) {
      svg.append("circle")
        .attr("cx", stemX + barWidth / 2)
        .attr("cy", topCircleY)
        .attr("r", 5)
        .attr("fill", "white")
        .attr("stroke-width", 1.5);
    }

    const capsuleGroup = svg.append("g")
      .attr("transform", `translate(${stemX + barWidth / 2 - capsuleSize / 2}, ${capsuleY})`);

    capsuleGroup.append("rect")
      .attr("width", capsuleSize)
      .attr("height", capsuleSize)
      .attr("rx", capsuleRadius)
      .attr("ry", capsuleRadius)
      .attr("fill", touchesCapsule ? "white" : "#f3f4f6")
      .attr("stroke", touchesCapsule ? "#e5e7eb" : "#d1d5db")
      .attr("stroke-width", 1);

    capsuleGroup.append("text")
      .attr("x", capsuleSize / 2)
      .attr("y", capsuleSize / 2 + 4)
      .attr("text-anchor", "middle")
      .attr("font-size", 12)
      .attr("fill", "#374151")
      .attr("font-weight", "bold")
      .text(label);
  }, [height, value, label, isPeak, index]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center w-full">
      <svg ref={svgRef} width={60} height={height + 40} className="block" />
      <div className="tooltip absolute z-10 px-2 py-1 text-xs text-gray-700 bg-white border border-gray-300 rounded shadow pointer-events-none opacity-0 transition-opacity duration-200" />
    </div>
  );
}
