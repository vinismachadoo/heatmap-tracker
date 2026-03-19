"use client"

import { HeatmapTracker } from "@/components/ui/heatmap-tracker"

const ExampleContributions = ({
  data,
}: React.ComponentProps<typeof HeatmapTracker>) => {
  return (
    <HeatmapTracker
      data={data}
      shapes={["square", "square", "square", "square", "square"]}
      classNames={{
        day: "rounded-none",
      }}
    />
  )
}

export default ExampleContributions
