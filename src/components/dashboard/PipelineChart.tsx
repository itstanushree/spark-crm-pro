import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const pipelineData = [
  { stage: "Lead", deals: 45, value: 125000, color: "bg-yellow-500" },
  { stage: "Contacted", deals: 32, value: 89000, color: "bg-blue-500" },
  { stage: "Qualified", deals: 18, value: 156000, color: "bg-purple-500" },
  { stage: "Proposal", deals: 12, value: 245000, color: "bg-orange-500" },
  { stage: "Negotiation", deals: 8, value: 180000, color: "bg-red-500" },
  { stage: "Won", deals: 5, value: 128000, color: "bg-green-500" },
]

export function PipelineChart() {
  const maxValue = Math.max(...pipelineData.map(item => item.value))
  const totalValue = pipelineData.reduce((sum, item) => sum + item.value, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Pipeline</CardTitle>
        <CardDescription>Current deals by stage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {pipelineData.map((item) => (
          <div key={item.stage} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="font-medium">{item.stage}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">
                  {item.deals} deals · ${(item.value / 1000).toFixed(0)}k
                </div>
              </div>
            </div>
            <Progress 
              value={(item.value / maxValue) * 100} 
              className="h-2"
            />
          </div>
        ))}
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium">Total Pipeline Value</span>
            <span className="font-bold">${(totalValue / 1000).toFixed(0)}k</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}