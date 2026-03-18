"use client"

import { Button } from "@/components/ui/button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Check, Copy } from "lucide-react"

export function CopyInstallButton({ command }: { command: string }) {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <Button onClick={() => copyToClipboard(command)} variant="outline">
      <span className="text-muted-foreground">$</span>
      <span className="mx-1">{command}</span>

      {isCopied ? (
        <Check data-icon="inline-end" className="text-green-500" />
      ) : (
        <Copy data-icon="inline-end" className="text-muted-foreground" />
      )}
    </Button>
  )
}
