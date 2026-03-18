"use client"

import {
  HeatmapTracker,
  HeatmapTrackerContainer,
  HeatmapTrackerLegend,
} from "@/registry/default/ui/heatmap-tracker"

const ExampleSteps = ({
  data,
}: React.ComponentProps<typeof HeatmapTracker>) => {
  return (
    <HeatmapTrackerContainer
      lightColors={[
        "var(--color-blue-200)",
        "var(--color-blue-400)",
        "var(--color-blue-600)",
        "var(--color-blue-800)",
        "var(--color-blue-900)",
      ]}
      darkColors={[
        "var(--color-blue-900)",
        "var(--color-blue-800)",
        "var(--color-blue-600)",
        "var(--color-blue-400)",
        "var(--color-blue-200)",
      ]}
      classNames={{
        day: "rounded-full",
      }}
    >
      <HeatmapTracker data={data} />
      <HeatmapTrackerLegend />
    </HeatmapTrackerContainer>
  )
}

export default ExampleSteps
