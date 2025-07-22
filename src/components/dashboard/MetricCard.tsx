import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string | number
  change?: {
    value: string
    type: "increase" | "decrease" | "neutral"
  }
  icon: LucideIcon
  className?: string
  trend?: number[]
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  className,
  trend 
}: MetricCardProps) {
  return (
    <Card className={cn("metric-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={cn(
            "text-xs flex items-center gap-1",
            change.type === "increase" && "text-success",
            change.type === "decrease" && "text-destructive", 
            change.type === "neutral" && "text-muted-foreground"
          )}>
            <span className={cn(
              change.type === "increase" && "text-success",
              change.type === "decrease" && "text-destructive"
            )}>
              {change.type === "increase" ? "+" : change.type === "decrease" ? "-" : ""}
              {change.value}
            </span>
            <span className="text-muted-foreground">from last month</span>
          </p>
        )}
        {trend && (
          <div className="mt-2 h-2 flex items-end gap-0.5">
            {trend.map((height, index) => (
              <div
                key={index}
                className="bg-primary/20 rounded-sm flex-1"
                style={{ height: `${Math.max(height, 0.1) * 100}%` }}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}