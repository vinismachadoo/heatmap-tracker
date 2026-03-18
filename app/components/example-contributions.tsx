"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/registry/default/ui/heatmap-tracker"

const ExampleContributions = ({
  data,
}: React.ComponentProps<typeof CalendarHeatmap>) => {
  return (
    <CalendarHeatmapContainer
      classNames={{
        day: "rounded-none",
      }}
    >
      <CalendarHeatmap data={data} />
      <CalendarHeatmapLegend />
    </CalendarHeatmapContainer>
  )
}

export default ExampleContributions
