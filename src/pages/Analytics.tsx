import { TrendingUp, Users, DollarSign, Target, Calendar, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Analytics() {
  const salesData = [
    { month: "Jan", revenue: 45000, deals: 12, leads: 234 },
    { month: "Feb", revenue: 52000, deals: 15, leads: 287 },
    { month: "Mar", revenue: 48000, deals: 13, leads: 312 },
    { month: "Apr", revenue: 61000, deals: 18, leads: 398 },
    { month: "May", revenue: 55000, deals: 16, leads: 356 },
    { month: "Jun", revenue: 67000, deals: 21, leads: 445 },
  ]

  const topPerformers = [
    { name: "Sarah Johnson", deals: 23, revenue: 285000, conversion: 34 },
    { name: "Michael Chen", deals: 19, revenue: 245000, conversion: 28 },
    { name: "Emily Davis", deals: 17, revenue: 198000, conversion: 25 },
    { name: "John Smith", deals: 15, revenue: 167000, conversion: 22 },
  ]

  const conversionFunnel = [
    { stage: "Visitors", count: 15420, percentage: 100 },
    { stage: "Leads", count: 1234, percentage: 8 },
    { stage: "Qualified", count: 456, percentage: 37 },
    { stage: "Proposals", count: 123, percentage: 27 },
    { stage: "Customers", count: 45, percentage: 37 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into your sales performance and trends
          </p>
        </div>
        <Badge variant="outline" className="px-3 py-1">
          Last 6 Months
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$328,000</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+15.2%</span> from last period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Deals Closed</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+8.1%</span> from last period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Deal Size</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,453</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+6.7%</span> from last period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">-2.3%</span> from last period
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Placeholder */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {salesData.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center space-y-2">
                      <div
                        className="bg-primary rounded-t w-12 transition-all hover:bg-primary-dark"
                        style={{ height: `${(data.revenue / 70000) * 200}px` }}
                      />
                      <span className="text-xs text-muted-foreground">{data.month}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales Pipeline Distribution</CardTitle>
                <CardDescription>Current deals by pipeline stage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { stage: "Lead", count: 45, color: "bg-yellow-500" },
                  { stage: "Qualified", count: 32, color: "bg-blue-500" },
                  { stage: "Proposal", count: 18, color: "bg-purple-500" },
                  { stage: "Negotiation", count: 12, color: "bg-orange-500" },
                  { stage: "Won", count: 8, color: "bg-green-500" },
                ].map((item) => (
                  <div key={item.stage} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.stage}</span>
                      <span>{item.count} deals</span>
                    </div>
                    <Progress value={(item.count / 45) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>Sales team performance this quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topPerformers.map((performer, index) => (
                  <div key={performer.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{performer.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {performer.deals} deals • ${performer.revenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{performer.conversion}%</p>
                      <p className="text-xs text-muted-foreground">conversion</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Funnel</CardTitle>
              <CardDescription>Track how visitors convert to customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {conversionFunnel.map((stage, index) => (
                  <div key={stage.stage} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{stage.stage}</span>
                      <div className="text-right">
                        <span className="text-sm font-medium">{stage.count.toLocaleString()}</span>
                        {index > 0 && (
                          <span className="text-xs text-muted-foreground ml-2">
                            ({stage.percentage}%)
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={stage.percentage} className="h-8" />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                        {stage.count.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Forecast</CardTitle>
              <CardDescription>Projected performance for next quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center p-6 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Conservative</h3>
                  <p className="text-2xl font-bold text-muted-foreground">$145k</p>
                  <p className="text-sm text-muted-foreground mt-1">75% confidence</p>
                </div>
                <div className="text-center p-6 border rounded-lg bg-primary/5">
                  <h3 className="text-lg font-medium mb-2">Most Likely</h3>
                  <p className="text-2xl font-bold text-primary">$185k</p>
                  <p className="text-sm text-muted-foreground mt-1">50% confidence</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Optimistic</h3>
                  <p className="text-2xl font-bold text-green-600">$225k</p>
                  <p className="text-sm text-muted-foreground mt-1">25% confidence</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}