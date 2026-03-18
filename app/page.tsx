import { Label } from "@/components/ui/label"
import ExampleContributions from "@/app/components/example-contributions"
import ExampleGym from "@/app/components/example-gym"
import ExampleMood from "@/app/components/example-mood"
import ExampleSteps from "@/app/components/example-steps"
import { CopyInstallButton } from "@/app/components/command-install"
import { generateContributions } from "@/lib/utils"

const INSTALL_COMMAND =
  "npx shadcn@latest add https://heatmap-tracker.ovinisanches.com/r/heatmap-tracker.json"

export default function Page() {
  const data = generateContributions()

  return (
    <div className="flex min-h-svh w-full flex-col items-center gap-y-4 p-6">
      <div className="flex flex-col items-center gap-y-4 py-6">
        <h1 className="text-4xl font-bold">Heatmap Tracker</h1>
        <CopyInstallButton command={INSTALL_COMMAND} />
      </div>

      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Github Contributions</Label>
        <ExampleContributions data={data} />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Steps Walked</Label>
        <ExampleSteps data={data} />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Gym Checkins</Label>
        <ExampleGym data={data} />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Mood Tracker</Label>
        <ExampleMood data={data} />
      </div>
    </div>
  )
}
