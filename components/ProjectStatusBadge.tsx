"use client"

import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { ProjectStatus } from "@/data/projects"

interface ProjectStatusBadgeProps {
    status?: ProjectStatus
    statusMessage?: string
    size?: 'sm' | 'md'
    showLabel?: boolean
}

const statusConfig = {
    stable: {
        icon: CheckCircle,
        label: "Stable",
        bgClass: "bg-emerald-500/20",
        textClass: "text-emerald-400",
        borderClass: "border-emerald-500/30",
        pulseClass: ""
    },
    warning: {
        icon: AlertTriangle,
        label: "Minor Issues",
        bgClass: "bg-amber-500/20",
        textClass: "text-amber-400",
        borderClass: "border-amber-500/30",
        pulseClass: ""
    },
    issues: {
        icon: XCircle,
        label: "Issues",
        bgClass: "bg-red-500/20",
        textClass: "text-red-400",
        borderClass: "border-red-500/30",
        pulseClass: "animate-pulse"
    }
}

export function ProjectStatusBadge({
    status = 'stable',
    statusMessage,
    size = 'md',
    showLabel = true
}: ProjectStatusBadgeProps) {
    const config = statusConfig[status]
    const Icon = config.icon

    const sizeClasses = size === 'sm'
        ? 'px-1.5 py-0.5 text-[10px] gap-1'
        : 'px-2.5 py-1 text-xs gap-1.5'

    const iconSize = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'

    return (
        <div className="relative group/status inline-flex">
            <span
                className={`
                    inline-flex items-center font-medium rounded-full 
                    ${sizeClasses} ${config.bgClass} ${config.textClass} 
                    ${config.borderClass} border backdrop-blur-sm
                    ${config.pulseClass}
                `}
            >
                <Icon className={iconSize} />
                {showLabel && <span>{config.label}</span>}
            </span>

            {statusMessage && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover/95 backdrop-blur-sm border border-border/50 rounded-lg text-xs text-popover-foreground shadow-xl opacity-0 group-hover/status:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 max-w-xs text-center">
                    {statusMessage}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover/95" />
                </div>
            )}
        </div>
    )
}
