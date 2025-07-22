import { Users, Target, TrendingUp, DollarSign } from "lucide-react"
import { MetricCard } from "@/components/dashboard/MetricCard"
import { PipelineChart } from "@/components/dashboard/PipelineChart"
import { RecentActivities } from "@/components/dashboard/RecentActivities"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your sales pipeline.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="px-3 py-1">
            This Month
          </Badge>
          <Button>Add Lead</Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Customers"
          value="2,847"
          change={{ value: "12%", type: "increase" }}
          icon={Users}
          trend={[0.1, 0.3, 0.5, 0.4, 0.6, 0.8, 1.0]}
        />
        <MetricCard
          title="Active Leads"
          value="1,234"
          change={{ value: "8%", type: "increase" }}
          icon={Target}
          trend={[0.2, 0.4, 0.3, 0.7, 0.5, 0.9, 0.8]}
        />
        <MetricCard
          title="Deals in Pipeline"
          value="89"
          change={{ value: "2%", type: "decrease" }}
          icon={TrendingUp}
          trend={[0.8, 0.6, 0.7, 0.4, 0.5, 0.3, 0.6]}
        />
        <MetricCard
          title="Monthly Revenue"
          value="$127,500"
          change={{ value: "23%", type: "increase" }}
          icon={DollarSign}
          trend={[0.1, 0.2, 0.4, 0.3, 0.6, 0.8, 1.0]}
        />
      </div>

      {/* Dashboard Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <PipelineChart />
          <QuickActions />
        </div>
        <div className="space-y-6">
          <RecentActivities />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
