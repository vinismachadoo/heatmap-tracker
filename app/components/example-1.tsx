"use client"

import {
  CalendarHeatmap,
  CalendarHeatmapContainer,
  CalendarHeatmapLegend,
} from "@/components/heatmap-tracker"
import { enUS } from "date-fns/locale"

const Example1 = () => {
  return (
    <CalendarHeatmapContainer className="bg-blue-500">
      <CalendarHeatmap data={[]} locale={enUS} />
      <CalendarHeatmapLegend />
    </CalendarHeatmapContainer>
  )
}

export default Example1
