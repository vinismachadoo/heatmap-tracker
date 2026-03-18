"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/components/heatmap-tracker"
import { generateContributions } from "@/lib/utils"

const ExampleContributions = () => {
  const data = generateContributions()

  return (
    <CalendarHeatmapContainer>
      <CalendarHeatmap
        data={data}
        classNames={{
          day: "rounded-none",
        }}
      />
      <CalendarHeatmapLegend />
    </CalendarHeatmapContainer>
  )
}

export default ExampleContributions
