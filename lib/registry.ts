import * as React from "react"
import { readFileFromRoot } from "@/lib/read-file"

type DemoItem = {
  name: string
  filePath: string
  component: React.LazyExoticComponent<React.ComponentType<unknown>>
}

function toReactComponent(maybe: unknown): React.ComponentType<unknown> {
  if (typeof maybe === "function") return maybe as React.ComponentType<unknown>
  if (maybe && typeof maybe === "object")
    return maybe as React.ComponentType<unknown>
  return () => null
}

const ExamplesIndex = {
  "github-contributions": {
    name: "github-contributions",
    filePath: "app/examples/github-contributions.tsx",
    component: React.lazy(async () => {
      const mod =
        (await import("@/app/examples/github-contributions")) as Record<
          string,
          unknown
        >
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "github-contributions"
      return {
        default: toReactComponent((mod.default ?? mod[exportName]) as unknown),
      }
    }),
  },
  swimming: {
    name: "swimming",
    filePath: "app/examples/swimming.tsx",
    component: React.lazy(async () => {
      const mod = (await import("@/app/examples/swimming")) as Record<
        string,
        unknown
      >
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "swimming"
      return {
        default: toReactComponent((mod.default ?? mod[exportName]) as unknown),
      }
    }),
  },
  "gym-checkins": {
    name: "gym-checkins",
    filePath: "app/examples/gym-checkins.tsx",
    component: React.lazy(async () => {
      const mod = (await import("@/app/examples/gym-checkins")) as Record<
        string,
        unknown
      >
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "gym-checkins"
      return {
        default: toReactComponent((mod.default ?? mod[exportName]) as unknown),
      }
    }),
  },
  "mood-tracker": {
    name: "mood-tracker",
    filePath: "app/examples/mood-tracker.tsx",
    component: React.lazy(async () => {
      const mod = (await import("@/app/examples/mood-tracker")) as Record<
        string,
        unknown
      >
      const exportName =
        Object.keys(mod).find(
          (key) =>
            typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || "mood-tracker"
      return {
        default: toReactComponent((mod.default ?? mod[exportName]) as unknown),
      }
    }),
  },
} satisfies Record<string, DemoItem>

export async function getDemoItem(name: string) {
  const demo = ExamplesIndex[name as keyof typeof ExamplesIndex]
  if (!demo) {
    return null
  }

  const content = await readFileFromRoot(demo.filePath)

  return {
    name: demo.name,
    type: "registry:internal" as const,
    files: [
      {
        path: demo.filePath,
        content,
        type: "registry:internal" as const,
      },
    ],
  }
}
