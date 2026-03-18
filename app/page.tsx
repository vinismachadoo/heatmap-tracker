import { Label } from "@/components/ui/label"
import ExampleContributions from "@/app/components/example-contributions"
import ExampleGym from "@/app/components/example-gym"
import ExampleMood from "@/app/components/example-mood"
import ExampleSteps from "@/app/components/example-steps"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center gap-y-4 p-6">
      <h1 className="text-4xl font-bold">Heatmap Tracker</h1>

      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Github Contributions</Label>
        <ExampleContributions />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Steps Walked</Label>
        <ExampleSteps />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Gym Checkins</Label>
        <ExampleGym />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label className="text-base font-medium">Mood Tracker</Label>
        <ExampleMood />
      </div>
    </div>
  )
}
