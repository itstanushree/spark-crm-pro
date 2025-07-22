import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, DollarSign, Calendar, FileText, Phone, Mail } from "lucide-react"

const quickActions = [
  {
    title: "Add New Lead",
    description: "Capture new potential customers",
    icon: UserPlus,
    action: () => console.log("Add lead"),
    variant: "default" as const,
  },
  {
    title: "Create Deal",
    description: "Start tracking a new opportunity",
    icon: DollarSign,
    action: () => console.log("Create deal"),
    variant: "secondary" as const,
  },
  {
    title: "Schedule Meeting",
    description: "Book time with prospects",
    icon: Calendar,
    action: () => console.log("Schedule meeting"),
    variant: "outline" as const,
  },
  {
    title: "Generate Report",
    description: "Create sales performance report",
    icon: FileText,
    action: () => console.log("Generate report"),
    variant: "outline" as const,
  },
  {
    title: "Make Call",
    description: "Contact leads and customers",
    icon: Phone,
    action: () => console.log("Make call"),
    variant: "outline" as const,
  },
  {
    title: "Send Email",
    description: "Follow up with prospects",
    icon: Mail,
    action: () => console.log("Send email"),
    variant: "outline" as const,
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks to keep your pipeline moving</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.title}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start gap-2 text-left"
              onClick={action.action}
            >
              <div className="flex items-center gap-2">
                <action.icon className="h-4 w-4" />
                <span className="font-medium">{action.title}</span>
              </div>
              <span className="text-xs text-muted-foreground font-normal">
                {action.description}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}