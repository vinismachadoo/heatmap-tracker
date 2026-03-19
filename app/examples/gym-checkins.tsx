"use client"

import { cn } from "@/lib/utils"
import { HeatmapTracker } from "@/components/ui/heatmap-tracker"

const ExampleGym = ({ data }: React.ComponentProps<typeof HeatmapTracker>) => {
  return (
    <HeatmapTracker
      className={cn(
        "[--level-0:var(--color-rose-200)] [--level-1:var(--color-rose-400)] [--level-2:var(--color-rose-600)] [--level-3:var(--color-rose-800)] [--level-4:var(--color-rose-900)]",
        "dark:[--level-0:var(--color-rose-900)] dark:[--level-1:var(--color-rose-800)] dark:[--level-2:var(--color-rose-600)] dark:[--level-3:var(--color-rose-400)] dark:[--level-4:var(--color-rose-200)]"
      )}
      shapes={["circle", "circle", "circle", "circle", "circle"]}
      data={data}
    />
  )
}

export default ExampleGym
