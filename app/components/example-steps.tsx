"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/components/heatmap-tracker"
import { generateContributions } from "@/lib/utils"

const ExampleSteps = () => {
  const data = generateContributions()

  return (
    <CalendarHeatmapContainer className="[--level-0:var(--color-blue-100)] [--level-1:var(--color-blue-200)] [--level-2:var(--color-blue-400)] [--level-3:var(--color-blue-600)] [--level-4:var(--color-blue-800)]">
      <CalendarHeatmap
        data={data}
        classNames={{
          day: "rounded-full",
        }}
      />
      <CalendarHeatmapLegend />
    </CalendarHeatmapContainer>
  )
}

export default ExampleSteps
