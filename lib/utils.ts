import { HeatmapTrackerData } from "@/components/ui/heatmap-tracker"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomDatas(): HeatmapTrackerData[] {
  const datas: HeatmapTrackerData[] = []
  for (let i = 0; i < 365; i++) {
    const setNull = Math.random() < 0.25
    if (setNull) continue
    const count = Math.random()
    datas.push({
      date: new Date(
        new Date(new Date().setDate(new Date().getDate() - i)).setHours(
          0,
          0,
          0,
          0
        )
      ),
      count: Math.floor(count * 5),
      level: Math.floor(count * 5),
    })
  }
  return datas
}
