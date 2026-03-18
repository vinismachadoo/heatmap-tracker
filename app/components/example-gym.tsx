"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/registry/default/ui/heatmap-tracker"
import { cn } from "@/lib/utils"

const ExampleGym = ({ data }: React.ComponentProps<typeof CalendarHeatmap>) => {
  return (
    <CalendarHeatmapContainer
      className={cn(
        "[--level-0:var(--color-orange-200)] [--level-1:var(--color-orange-400)] [--level-2:var(--color-orange-600)] [--level-3:var(--color-orange-800)] [--level-4:var(--color-orange-900)]",
        "dark:[--level-0:var(--color-orange-900)] dark:[--level-1:var(--color-orange-800)] dark:[--level-2:var(--color-orange-600)] dark:[--level-3:var(--color-orange-400)] dark:[--level-4:var(--color-orange-200)]"
      )}
      classNames={{
        day: "rotate-45 scale-75 rounded-none",
      }}
    >
      <CalendarHeatmap data={data} />
      <CalendarHeatmapLegend />
    </CalendarHeatmapContainer>
  )
}

export default ExampleGym
