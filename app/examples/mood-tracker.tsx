"use client"

import { cn } from "@/lib/utils"
import { HeatmapTracker } from "@/components/ui/heatmap-tracker"

const ExampleMood = ({ data }: React.ComponentProps<typeof HeatmapTracker>) => {
  return (
    <HeatmapTracker
      lightColors={[
        "var(--color-yellow-200)",
        "var(--color-yellow-500)",
        "var(--color-lime-600)",
        "var(--color-green-800)",
        "var(--color-red-700)",
      ]}
      darkColors={[
        "var(--color-yellow-200)",
        "var(--color-yellow-500)",
        "var(--color-lime-600)",
        "var(--color-green-800)",
        "var(--color-red-700)",
      ]}
      shapes={["triangle", "x", "pentagon", "circle", "plus"]}
      classNames={{
        day: cn("rounded-none"),
      }}
      data={data}
    />
  )
}

export default ExampleMood
