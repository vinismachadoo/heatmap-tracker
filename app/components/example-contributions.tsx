"use client"

import {
  HeatmapTracker,
  HeatmapTrackerContainer,
  HeatmapTrackerLegend,
} from "@/registry/default/ui/heatmap-tracker"

const ExampleContributions = ({
  data,
}: React.ComponentProps<typeof HeatmapTracker>) => {
  return (
    <HeatmapTrackerContainer
      classNames={{
        day: "rounded-none",
      }}
    >
      <HeatmapTracker data={data} />
      <HeatmapTrackerLegend />
    </HeatmapTrackerContainer>
  )
}

export default ExampleContributions
