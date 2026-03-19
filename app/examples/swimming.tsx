"use client"

import { HeatmapTracker } from "@/components/ui/heatmap-tracker"

const ExampleSwimming = ({
  data,
}: React.ComponentProps<typeof HeatmapTracker>) => {
  return (
    <HeatmapTracker
      lightColors={[
        "var(--color-teal-200)",
        "var(--color-teal-400)",
        "var(--color-teal-600)",
        "var(--color-teal-800)",
        "var(--color-teal-900)",
      ]}
      darkColors={[
        "var(--color-teal-900)",
        "var(--color-teal-800)",
        "var(--color-teal-600)",
        "var(--color-teal-400)",
        "var(--color-teal-200)",
      ]}
      shapes={["diamond", "diamond", "diamond", "diamond", "diamond"]}
      data={data}
    />
  )
}

export default ExampleSwimming
