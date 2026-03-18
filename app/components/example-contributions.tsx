"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/components/heatmap-tracker"

const ExampleContributions = ({
  data,
}: React.ComponentProps<typeof CalendarHeatmap>) => {
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
