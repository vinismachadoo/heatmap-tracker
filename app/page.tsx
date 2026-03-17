import Example1 from "./components/example-1"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full flex-col gap-y-4 bg-red-500 p-6">
      <h1 className="text-2xl font-bold">Heatmap Tracker</h1>

      <div className="flex flex-col items-center gap-y-8">
        <Example1 />
        <Example1 />
        <Example1 />
      </div>
    </div>
  )
}
