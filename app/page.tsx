import { CopyInstallButton } from "@/app/components/command-install"
import ExampleContributions from "@/app/examples/github-contributions"
import ExampleGym from "@/app/examples/gym-checkins"
import ExampleMood from "@/app/examples/mood-tracker"
import ExampleSwimming from "@/app/examples/swimming"
import { ComponentSource } from "@/components/component-source"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn, generateRandomDatas } from "@/lib/utils"

const INSTALL_COMMAND =
  "npx shadcn@latest add https://heatmap-tracker.ovinisanches.com/r/heatmap-tracker.json"

export default function Page() {
  const randomData = generateRandomDatas()

  const CONTROBUTION_LEVEL_CLASSES = [
    "bg-lime-200 dark:bg-lime-900",
    "bg-lime-400 dark:bg-lime-800",
    "bg-lime-600 dark:bg-lime-600",
    "bg-lime-800 dark:bg-lime-400",
    "bg-lime-900 dark:bg-lime-200",
  ]

  const STEPS_LEVEL_CLASSES = [
    "bg-teal-200 dark:bg-teal-900 scale-75 rotate-45 rounded-none",
    "bg-teal-400 dark:bg-teal-800 scale-75 rotate-45 rounded-none",
    "bg-teal-600 dark:bg-teal-600 scale-75 rotate-45 rounded-none",
    "bg-teal-800 dark:bg-teal-400 scale-75 rotate-45 rounded-none",
    "bg-teal-900 dark:bg-teal-200 scale-75 rotate-45 rounded-none",
  ]

  const GYM_LEVEL_CLASSES = [
    "bg-rose-200 dark:bg-rose-900 rounded-full",
    "bg-rose-400 dark:bg-rose-800 rounded-full",
    "bg-rose-600 dark:bg-rose-600 rounded-full",
    "bg-rose-800 dark:bg-rose-400 rounded-full",
    "bg-rose-900 dark:bg-rose-200 rounded-full",
  ]

  const MOOD_LEVEL_CLASSES = [
    "bg-yellow-300 dark:bg-yellow-300 [clip-path:polygon(50%_0%,100%_100%,0%_100%)]",
    "bg-yellow-500 dark:bg-yellow-500 [clip-path:polygon(20%_0%,_0%_20%,_30%_50%,_0%_80%,_20%_100%,_50%_70%,_80%_100%,_100%_80%,_70%_50%,_100%_20%,_80%_0%,_50%_30%)]",
    "bg-lime-600 dark:bg-lime-600 [clip-path:polygon(50%_0%,_100%_38%,_82%_100%,_18%_100%,_0%_38%)]",
    "bg-green-800 dark:bg-green-800 [clip-path:circle(50%_at_50%_50%)]",
    "bg-red-700 dark:bg-red-700 [clip-path:polygon(0_35%,_35%_35%,_35%_0%,_65%_0%,_65%_35%,_100%_35%,_100%_65%,_65%_65%,_65%_100%,_35%_100%,_35%_65%,_0_65%)]",
  ]

  return (
    <div className="flex min-h-svh w-full flex-col items-center gap-y-4 p-6">
      <div className="flex flex-col items-center gap-y-4 py-6">
        <h1 className="text-4xl">Heatmap Tracker</h1>
        <CopyInstallButton command={INSTALL_COMMAND} />
      </div>

      <Tabs className="w-300">
        <TabsList className="w-full">
          <TabsTrigger value="contributions" className="gap-x-2">
            <div className="flex items-center gap-x-0.5">
              {CONTROBUTION_LEVEL_CLASSES.map((levelClassName, index) => (
                <div
                  key={index}
                  data-level={index.toString()}
                  className={cn("size-2.5", levelClassName)}
                />
              ))}
            </div>
            Github Contributions
          </TabsTrigger>
          <TabsTrigger value="swimming" className="gap-x-2">
            <div className="flex items-center gap-x-0.5">
              {STEPS_LEVEL_CLASSES.map((levelClassName, index) => (
                <div
                  key={index}
                  data-level={index.toString()}
                  className={cn("size-2.5", levelClassName)}
                />
              ))}
            </div>
            Swimming
          </TabsTrigger>
          <TabsTrigger value="gym" className="gap-x-2">
            <div className="flex items-center gap-x-0.5">
              {GYM_LEVEL_CLASSES.map((levelClassName, index) => (
                <div
                  key={index}
                  data-level={index.toString()}
                  className={cn("size-2.5", levelClassName)}
                />
              ))}
            </div>
            Gym Checkins
          </TabsTrigger>
          <TabsTrigger value="mood" className="gap-x-2">
            <div className="flex items-center gap-x-0.5">
              {MOOD_LEVEL_CLASSES.map((levelClassName, index) => (
                <div
                  key={index}
                  data-level={index.toString()}
                  className={cn("size-2.5 rounded-none", levelClassName)}
                />
              ))}
            </div>
            Mood Tracker
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="contributions"
          className="flex flex-col items-center justify-center gap-y-4 pt-6"
          keepMounted
        >
          <ExampleContributions data={randomData} />
          <ComponentSource name="github-contributions" />
        </TabsContent>
        <TabsContent
          value="swimming"
          className="flex flex-col items-center justify-center gap-y-4 pt-6"
          keepMounted
        >
          <ExampleSwimming data={randomData} />
          <ComponentSource name="swimming" />
        </TabsContent>
        <TabsContent
          value="gym"
          className="flex flex-col items-center justify-center gap-y-4 pt-6"
          keepMounted
        >
          <ExampleGym data={randomData} />
          <ComponentSource name="gym-checkins" />
        </TabsContent>
        <TabsContent
          value="mood"
          className="flex flex-col items-center justify-center gap-y-4 pt-6"
          keepMounted
        >
          <ExampleMood data={randomData} />
          <ComponentSource name="mood-tracker" />
        </TabsContent>
      </Tabs>

      <div className="pt-10">
        <p>~ Roadmap</p>
        <ul>
          <li>Flexbible levels (up to 5)</li>
          <li>Create: should randomize presets</li>
        </ul>
      </div>
    </div>
  )
}
