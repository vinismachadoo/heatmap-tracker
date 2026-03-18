// Original code: https://github.com/sp-yduck/shadcn-ui-calendar-heatmap/tree/main

"use client"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import * as React from "react"
import {
  Day,
  useDayPicker,
  WeekNumber,
  type CalendarWeek,
} from "react-day-picker"
import { enUS } from "date-fns/locale"

const DAY_SIZE = "calc(var(--spacing)*4.5)"
const DAY_MARGIN = "2px"

type CalendarHeatmapContextValue = {
  _classNames: Record<string, string>
  _setClassNames: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

const CalendarHeatmapContext = React.createContext<
  CalendarHeatmapContextValue | undefined
>(undefined)

export const useCalendarHeatmap = () => {
  const context = React.useContext(CalendarHeatmapContext)
  if (!context) {
    throw new Error(
      "useCalendarHeatmap must be used within a CalendarHeatmapContainer"
    )
  }
  return context
}

const CalendarHeatmapContainer = ({
  children,
  className,
  lightColors = [],
  darkColors = [],
  ...props
}: React.ComponentProps<"div"> & {
  lightColors?: string[]
  darkColors?: string[]
}) => {
  const [classNames, setClassNames] = React.useState<Record<string, string>>({})
  return (
    <CalendarHeatmapContext.Provider
      value={{
        _classNames: classNames,
        _setClassNames: setClassNames,
      }}
    >
      <div
        style={
          {
            "--level-0-light": lightColors[0] ?? "var(--color-lime-200)",
            "--level-1-light": lightColors[1] ?? "var(--color-lime-400)",
            "--level-2-light": lightColors[2] ?? "var(--color-lime-600)",
            "--level-3-light": lightColors[3] ?? "var(--color-lime-800)",
            "--level-4-light": lightColors[4] ?? "var(--color-lime-900)",
            "--level-0-dark": darkColors[0] ?? "var(--color-lime-900)",
            "--level-1-dark": darkColors[1] ?? "var(--color-lime-800)",
            "--level-2-dark": darkColors[2] ?? "var(--color-lime-600)",
            "--level-3-dark": darkColors[3] ?? "var(--color-lime-400)",
            "--level-4-dark": darkColors[4] ?? "var(--color-lime-200)",
            "--day-size": DAY_SIZE,
            "--day-margin": DAY_MARGIN,
          } as React.CSSProperties
        }
        className={cn(
          "flex w-fit flex-col gap-y-4 overflow-x-scroll p-2",
          "[--level-0:var(--level-0-light)] [--level-1:var(--level-1-light)] [--level-2:var(--level-2-light)] [--level-3:var(--level-3-light)] [--level-4:var(--level-4-light)]",
          "dark:[--level-0:var(--level-0-dark)] dark:[--level-1:var(--level-1-dark)] dark:[--level-2:var(--level-2-dark)] dark:[--level-3:var(--level-3-dark)] dark:[--level-4:var(--level-4-dark)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CalendarHeatmapContext.Provider>
  )
}

export interface CalendarHeatmapData {
  date: Date
  count: number
  level: number
}

const CalendarHeatmap = ({
  data,
  locale = enUS,
  components,
  classNames,
  ...props
}: React.ComponentProps<typeof Calendar> & {
  data: Array<CalendarHeatmapData>
}) => {
  const formatCaption = (date: Date) =>
    date.toLocaleString(locale?.code, { month: "short" })
  const elevenMonthAgo = new Date(
    new Date().setMonth(new Date().getMonth() - 12)
  )

  const heatmapModify = () => {
    const zero: Date[] = []
    const one: Date[] = []
    const two: Date[] = []
    const three: Date[] = []
    const four: Date[] = []
    for (const item of data) {
      if (item.level === 0) {
        zero.push(item.date)
      } else if (item.level === 1) {
        one.push(item.date)
      } else if (item.level === 2) {
        two.push(item.date)
      } else if (item.level === 3) {
        three.push(item.date)
      } else if (item.level === 4) {
        four.push(item.date)
      }
    }

    return {
      zero: zero,
      one: one,
      two: two,
      three: three,
      four: four,
    }
  }

  const { _setClassNames } = useCalendarHeatmap()

  React.useEffect(() => {
    _setClassNames({
      ...classNames,
    })
  }, [])

  return (
    <Calendar
      formatters={{ formatCaption }}
      locale={locale}
      numberOfMonths={13}
      defaultMonth={elevenMonthAgo}
      hideWeekdays
      fixedWeeks
      className="w-fit items-center justify-center p-0"
      classNames={{
        ...classNames,
        root: cn("w-auto", classNames?.root),
        nav: cn("hidden", classNames?.nav),
        caption_label: cn("text-xs font-normal", classNames?.caption_label),
        month: cn("ml-0 w-fit", classNames?.month),
        month_caption: cn("h-fit px-0", classNames?.month_caption),
        months: cn("w-fit gap-0", classNames?.months),
        month_grid: cn("w-fit", classNames?.month_grid),
        weeks: cn("flex w-fit", classNames?.weeks),
        week: cn(
          "mt-0 flex flex-col select-none data-[duplicated-previous-month=true]:hidden",
          classNames?.week
        ),
        day: cn(
          "m-(--day-margin) size-(--day-size) rounded-sm border border-border/20 bg-muted/50 text-xs text-transparent",
          "data-[hidden=true]:hidden",
          classNames?.day
        ),
        outside: cn("text-xs text-transparent", classNames?.outside),
        today: cn(
          "m-(--day-margin) size-(--day-size) rounded-sm border border-border/20 bg-muted/50 text-xs text-transparent",
          classNames?.day,
          classNames?.today
        ),
      }}
      modifiers={heatmapModify()}
      modifiersClassNames={{
        zero: "bg-(--level-0)",
        one: "bg-(--level-1)",
        two: "bg-(--level-2)",
        three: "bg-(--level-3)",
        four: "bg-(--level-4)",
      }}
      components={{
        Week: (props) => <CustomWeek week={props.week} data={data} />,
        ...components,
      }}
      {...props}
    />
  )
}

interface CustomWeekProps {
  week: CalendarWeek
  data: CalendarHeatmapData[]
}

function CustomWeek({ week, data }: CustomWeekProps) {
  const {
    getModifiers,
    components,
    classNames,
    styles,
    formatters,
    dayPickerProps,
  } = useDayPicker()

  const DayComponent = components?.Day ?? Day
  const WeekNumberComponent = components?.WeekNumber ?? WeekNumber
  const showWeekNumber = dayPickerProps.showWeekNumber ?? false

  const displayMonth = week.days[0]?.displayMonth
  const monthOfLastDay = week.days[6]?.date.getMonth()
  const monthOfFirstDay = week.days[0]?.date.getMonth()
  const thisMonth = displayMonth?.getMonth()

  const modifierClassNames = dayPickerProps.modifiersClassNames ?? {}
  const allClassNames: Record<string, string> = {
    ...classNames,
    ...modifierClassNames,
  }

  return (
    <tr
      data-duplicated-next-month={thisMonth !== monthOfLastDay}
      data-duplicated-previous-month={thisMonth !== monthOfFirstDay}
      className={classNames?.week}
      style={styles?.week}
    >
      {showWeekNumber && (
        <WeekNumberComponent
          week={week}
          className={classNames?.week_number}
          style={styles?.week_number}
        />
      )}
      {week.days.map((day) => {
        const modifiers = getModifiers(day)
        const modifierClasses = Object.entries(modifiers)
          .filter(([, v]) => v)
          .map(([k]) => allClassNames[k])
          .filter(Boolean)
          .join(" ")
        const dayClassName = cn(classNames?.day, modifierClasses)
        const count =
          data.find(
            (item) => item.date.toDateString() === day.date.toDateString()
          )?.count ?? "No"
        const level =
          data.find(
            (item) => item.date.toDateString() === day.date.toDateString()
          )?.level ?? 0

        // Get the start of the week of the date exactly one year ago from today at 00:00:00:00
        const oneYearAgoStartOfWeek = new Date(
          new Date().setFullYear(new Date().getFullYear() - 1)
        )
        oneYearAgoStartOfWeek.setDate(
          oneYearAgoStartOfWeek.getDate() - oneYearAgoStartOfWeek.getDay()
        )
        oneYearAgoStartOfWeek.setHours(0, 0, 0, 0)

        return (
          <Tooltip key={`${day.isoDate}_${day.displayMonthId}`}>
            <TooltipTrigger
              render={
                <DayComponent
                  day={day}
                  modifiers={modifiers}
                  className={dayClassName}
                  style={styles?.day}
                  role="gridcell"
                  data-level={level.toString()}
                  data-hidden={
                    day.date > new Date() || day.date < oneYearAgoStartOfWeek
                  }
                >
                  {formatters.formatDay(
                    day.date,
                    day.dateLib.options,
                    day.dateLib
                  )}
                </DayComponent>
              }
            />
            <TooltipContent>
              {`${count} activities on ${day.date.toDateString()}`}
            </TooltipContent>
          </Tooltip>
        )
      })}
    </tr>
  )
}

const CalendarHeatmapLegend = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const { _classNames } = useCalendarHeatmap()

  return (
    <div
      className={cn(
        "flex w-full justify-end space-x-2 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      <span>less</span>
      <div className="flex items-center space-x-1">
        <div
          data-level="0"
          className={cn(
            "size-(--day-size) rounded-sm bg-(--level-0)",
            _classNames.day
          )}
        />
        <div
          data-level="1"
          className={cn(
            "size-(--day-size) rounded-sm bg-(--level-1)",
            _classNames.day
          )}
        />
        <div
          data-level="2"
          className={cn(
            "size-(--day-size) rounded-sm bg-(--level-2)",
            _classNames.day
          )}
        />
        <div
          data-level="3"
          className={cn(
            "size-(--day-size) rounded-sm bg-(--level-3)",
            _classNames.day
          )}
        />
        <div
          data-level="4"
          className={cn(
            "size-(--day-size) rounded-sm bg-(--level-4)",
            _classNames.day
          )}
        />
      </div>
      <span>more</span>
    </div>
  )
}

export { CalendarHeatmap, CalendarHeatmapContainer, CalendarHeatmapLegend }
