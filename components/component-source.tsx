import * as React from "react"

import { formatCode } from "@/lib/format-code"
import { highlightCode } from "@/lib/highlight-code"
import { readFileFromRoot } from "@/lib/read-file"
import { getDemoItem } from "@/lib/registry"
import { cn } from "@/lib/utils"

export async function ComponentSource({
  name,
  src,
  title,
  language,
  className,
  styleName = "new-york-v4",
  maxLines,
}: React.ComponentProps<"div"> & {
  name?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
  styleName?: string
  maxLines?: number
}) {
  if (!name && !src) {
    return null
  }

  let code: string | undefined

  if (name) {
    const item = await getDemoItem(name)
    code = item?.files?.[0]?.content
  }

  if (src) {
    code = await readFileFromRoot(src)
  }

  if (!code) {
    return null
  }

  code = await formatCode(code, styleName)
  code = code.replaceAll("/* eslint-disable react/no-children-prop */\n", "")

  // Truncate code if maxLines is set.
  if (maxLines) {
    code = code.split("\n").slice(0, maxLines).join("\n")
  }

  const lang = language ?? title?.split(".").pop() ?? "tsx"
  const highlightedCode = await highlightCode(code, lang)

  return (
    <div
      data-slot="component-preview"
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-xl border"
      )}
    >
      <div
        data-slot="code"
        className="relative overflow-hidden **:data-rehype-pretty-code-figure:m-0! **:data-[slot=copy-button]:right-4 **:data-[slot=copy-button]:hidden data-[mobile-code-visible=true]:**:data-[slot=copy-button]:flex [&_pre]:max-h-72"
      >
        <div className={cn("relative", className)}>
          {/* check global.css for more styling */}
          <ComponentCode
            code={code}
            highlightedCode={highlightedCode}
            language={lang}
            title={title}
          />
        </div>
      </div>
    </div>
  )
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string
  highlightedCode: string
  language: string
  title: string | undefined
}) {
  return (
    <figure data-rehype-pretty-code-figure="" className="[&>pre]:max-h-96">
      {title && (
        <figcaption
          data-rehype-pretty-code-title=""
          className="flex items-center gap-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70"
          data-language={language}
        >
          {/* {getIconForLanguageExtension(language)} */}
          {title}
        </figcaption>
      )}
      {/* <CopyButton value={code} /> */}
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  )
}
