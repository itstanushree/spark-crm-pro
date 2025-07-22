import { useState } from "react"
import { MoreHorizontal, Plus, Search, Filter, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const leads = [
  {
    id: 1,
    name: "Alice Williams",
    company: "StartupX",
    email: "alice@startupx.com",
    phone: "+1 (555) 111-2222",
    source: "Website",
    score: 85,
    status: "hot",
    value: 75000,
    lastActivity: "Viewed pricing page",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Robert Brown",
    company: "MegaCorp",
    email: "robert@megacorp.com",
    phone: "+1 (555) 222-3333",
    source: "LinkedIn",
    score: 65,
    status: "warm",
    value: 150000,
    lastActivity: "Downloaded whitepaper",
    createdAt: "2024-01-14",
  },
  {
    id: 3,
    name: "Jennifer Taylor",
    company: "TechFlow",
    email: "jen@techflow.com",
    phone: "+1 (555) 333-4444",
    source: "Referral",
    score: 40,
    status: "cold",
    value: 35000,
    lastActivity: "Opened email",
    createdAt: "2024-01-13",
  },
  {
    id: 4,
    name: "David Wilson",
    company: "CloudVentures",
    email: "david@cloudventures.com",
    phone: "+1 (555) 444-5555",
    source: "Trade Show",
    score: 90,
    status: "hot",
    value: 200000,
    lastActivity: "Requested demo",
    createdAt: "2024-01-12",
  },
]

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "hot":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">🔥 Hot</Badge>
      case "warm":
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">♨️ Warm</Badge>
      case "cold":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">❄️ Cold</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leads</h1>
          <p className="text-muted-foreground">
            Track and nurture potential customers through your sales funnel
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Leads</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <Star className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Hot Leads</p>
                <p className="text-2xl font-bold text-red-600">87</p>
              </div>
              <div className="text-2xl">🔥</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold">23.5%</p>
              </div>
              <div className="text-2xl">📈</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Score</p>
                <p className="text-2xl font-bold">67</p>
              </div>
              <div className="text-2xl">⭐</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Leads Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredLeads.map((lead) => (
          <Card key={lead.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={`/avatars/lead-${lead.id}.png`} />
                    <AvatarFallback>
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{lead.name}</CardTitle>
                    <CardDescription>{lead.company}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Convert to Customer</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Call</DropdownMenuItem>
                    <DropdownMenuItem>Send Email</DropdownMenuItem>
                    <DropdownMenuItem>Edit Lead</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                {getStatusBadge(lead.status)}
                <Badge variant="outline">{lead.source}</Badge>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Lead Score</span>
                  <span className={`font-medium ${getScoreColor(lead.score)}`}>
                    {lead.score}/100
                  </span>
                </div>
                <Progress value={lead.score} className="h-2" />
              </div>

              <div className="space-y-1 text-sm">
                <p className="text-muted-foreground">📧 {lead.email}</p>
                <p className="text-muted-foreground">📞 {lead.phone}</p>
                <p className="text-muted-foreground">💰 ${lead.value.toLocaleString()}</p>
              </div>

              <div className="text-sm">
                <p className="font-medium">Last Activity:</p>
                <p className="text-muted-foreground">{lead.lastActivity}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}