import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

const activities = [
  {
    id: 1,
    type: "deal_won",
    title: "Deal closed with TechCorp",
    description: "$15,000",
    status: "won",
    avatar: "TC",
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
  },
  {
    id: 2,
    type: "new_lead",
    title: "New lead from website",
    description: "John Smith - ABC Company",
    status: "new",
    avatar: "JS",
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
  },
  {
    id: 3,
    type: "meeting_scheduled",
    title: "Demo scheduled",
    description: "Tomorrow 2:00 PM",
    status: "scheduled",
    avatar: "DM",
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
  },
  {
    id: 4,
    type: "customer_upgrade",
    title: "Customer upgraded plan",
    description: "Enterprise Plan",
    status: "upgrade",
    avatar: "EP",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
  },
  {
    id: 5,
    type: "call_completed",
    title: "Sales call completed",
    description: "Follow-up required",
    status: "follow_up",
    avatar: "SC",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
]

const statusStyles = {
  won: "status-won",
  new: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  scheduled: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  upgrade: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  follow_up: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
}

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest updates from your pipeline</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={`/avatars/${activity.avatar.toLowerCase()}.png`} />
                <AvatarFallback>{activity.avatar}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium truncate">
                    {activity.title}
                  </p>
                  <Badge 
                    className={`status-badge ${statusStyles[activity.status as keyof typeof statusStyles]}`}
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>
              
              <div className="text-xs text-muted-foreground">
                {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}