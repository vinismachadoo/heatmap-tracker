"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/components/heatmap-tracker"
import { generateContributions } from "@/lib/utils"

const ExampleGym = () => {
  const data = generateContributions()

  return (
    <CalendarHeatmapContainer className="[--level-0:var(--color-orange-100)] [--level-1:var(--color-orange-200)] [--level-2:var(--color-orange-400)] [--level-3:var(--color-orange-600)] [--level-4:var(--color-orange-800)]">
      <CalendarHeatmap
        data={data}
        classNames={{
          day: "rotate-45 scale-75 rounded-none",
        }}
      />
      <CalendarHeatmapLegend />
    </CalendarHeatmapContainer>
  )
}

export default ExampleGym
