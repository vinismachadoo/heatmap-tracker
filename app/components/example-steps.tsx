"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/components/heatmap-tracker"

const ExampleSteps = ({
  data,
}: React.ComponentProps<typeof CalendarHeatmap>) => {
  return (
    <CalendarHeatmapContainer
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
    >
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
