"use client"

import { AlertOctagon, AlertTriangle, CheckCircle, LoaderCircle } from "lucide-react"
import { ProjectStatus } from "@/data/projects"

interface ProjectStatusBadgeProps {
  status?: ProjectStatus
  statusMessage?: string
  size?: "sm" | "md"
  showLabel?: boolean
}

const statusConfig = {
  stable: {
    icon: CheckCircle,
    label: "Stable",
    className: "bg-emerald-100 text-emerald-700 border-emerald-300",
  },
  warning: {
    icon: AlertTriangle,
    label: "Minor Issues",
    className: "bg-amber-100 text-amber-700 border-amber-300",
  },
  issues: {
    icon: AlertOctagon,
    label: "Deployment Issues",
    className: "bg-red-100 text-red-700 border-red-300",
  },
  update: {
    icon: LoaderCircle,
    label: "Update Ongoing",
    className: "bg-cyan-100 text-cyan-700 border-cyan-300",
  },
}

export function ProjectStatusBadge({
  status = "stable",
  statusMessage,
  size = "md",
  showLabel = true,
}: ProjectStatusBadgeProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  const sizeClasses = size === "sm" ? "px-2 py-1 text-[11px]" : "px-2.5 py-1 text-xs"
  const iconSize = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"

  return (
    <div className="relative group/status inline-flex">
      <span className={`inline-flex items-center gap-1.5 rounded-full border font-semibold ${sizeClasses} ${config.className}`}>
        <Icon className={`${iconSize} ${status === "update" ? "animate-spin" : ""}`} />
        {showLabel && <span>{config.label}</span>}
      </span>

      {statusMessage && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg border border-border bg-card text-foreground text-xs shadow-xl opacity-0 group-hover/status:opacity-100 transition-opacity whitespace-nowrap z-20">
          {statusMessage}
        </span>
      )}
    </div>
  )
}
