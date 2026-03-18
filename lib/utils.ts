import { CalendarHeatmapData } from "@/registry/default/ui/heatmap-tracker"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
}

export const generateContributions = (): CalendarHeatmapData[] => {
  const end = new Date()
  const data: { date: Date; count: number }[] = []
  const rand = seededRandom(42)

  // Momentum: positive = active streak, negative = inactive streak
  let momentum = 0

  for (let i = 0; i < 365; i++) {
    const date = new Date(end)
    date.setDate(date.getDate() - (364 - i))

    const dow = date.getDay()
    const isWeekend = dow === 0 || dow === 6
    const r = rand()

    // Drift momentum toward 0 slowly, with random jolts
    momentum = momentum * 0.85 + (rand() - 0.5) * 1.5
    // Occasional vacation: strong negative jolt
    if (rand() < 0.01) momentum = -3
    // Occasional burst week: strong positive jolt
    if (rand() < 0.015) momentum = 3

    // Probability of being active today
    const activeProb = isWeekend ? 0.25 : 0.7
    const adjusted = activeProb + momentum * 0.12

    if (r > adjusted) continue

    // Count: weekdays get more, peaks come from high momentum
    const base = isWeekend ? 1 : 3
    const peak = Math.max(0, momentum) * 3
    const noise = rand() * 6
    const count = Math.max(1, Math.round(base + peak + noise))

    data.push({ date, count })
  }

  const modifiedData = generateIntensities(data)
  return modifiedData
}

export const generateIntensities = (
  data: { date: Date; count: number }[]
): CalendarHeatmapData[] => {
  const dataCountMax = Math.max(...data.map((item) => item.count))
  const dataCountMin = Math.min(...data.map((item) => item.count))

  // Assign intensity according to 5 bins between dataCountMin and dataCountMax
  const bins = 5
  const range = dataCountMax - dataCountMin
  // Avoid division by zero if all values are the same
  const binSize = range === 0 ? 1 : range / (bins - 1)

  const newData = data.map((item) => {
    // If binSize is 0 (all values equal), set to middle bin
    let level
    if (range === 0) {
      level = 2
    } else {
      level = Math.floor((item.count - dataCountMin) / binSize)
      level = Math.max(0, Math.min(level, bins - 1))
    }
    return {
      ...item,
      level,
    }
  })
  return newData
}
