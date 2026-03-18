"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/registry/default/ui/heatmap-tracker"
import { cn } from "@/lib/utils"

const ExampleMood = ({
  data,
}: React.ComponentProps<typeof CalendarHeatmap>) => {
  return (
    <CalendarHeatmapContainer
      lightColors={[
        "var(--color-red-500)",
        "var(--color-violet-500)",
        "var(--color-teal-500)",
        "var(--color-yellow-500)",
        "var(--color-lime-500)",
      ]}
      darkColors={[
        "var(--color-red-500)",
        "var(--color-violet-500)",
        "var(--color-teal-500)",
        "var(--color-yellow-500)",
        "var(--color-lime-500)",
      ]}
      classNames={{
        day: cn(
          "rounded-none [--hexagon-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] [--triangle-path-down:polygon(0%_0%,100%_0%,50%_100%)] [--triangle-path-up:polygon(50%_0%,100%_100%,0%_100%)]",
          "data-[level=0]:[clip-path:var(--triangle-path-down)]",
          "data-[level=1]:[clip-path:var(--hexagon-path)]",
          "data-[level=2]:rounded-full",
          "data-[level=3]:scale-75 data-[level=3]:rotate-45",
          "data-[level=4]:[clip-path:var(--triangle-path-up)]"
        ),
      }}
    >
      <CalendarHeatmap data={data} />
      <CalendarHeatmapLegend />
    </CalendarHeatmapContainer>
  )
}

export default ExampleMood
