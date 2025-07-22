import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Index from "./pages/Index";
import Customers from "./pages/Customers";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" defaultColorTheme="blue">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/deals" element={<div className="p-6"><h1 className="text-3xl font-bold">Deals</h1><p className="text-muted-foreground">Deal management coming soon...</p></div>} />
              <Route path="/pipeline" element={<div className="p-6"><h1 className="text-3xl font-bold">Pipeline</h1><p className="text-muted-foreground">Pipeline visualization coming soon...</p></div>} />
              <Route path="/opportunities" element={<div className="p-6"><h1 className="text-3xl font-bold">Opportunities</h1><p className="text-muted-foreground">Opportunity tracking coming soon...</p></div>} />
              <Route path="/tasks" element={<div className="p-6"><h1 className="text-3xl font-bold">Tasks</h1><p className="text-muted-foreground">Task management coming soon...</p></div>} />
              <Route path="/activities" element={<div className="p-6"><h1 className="text-3xl font-bold">Activities</h1><p className="text-muted-foreground">Activity tracking coming soon...</p></div>} />
              <Route path="/calendar" element={<div className="p-6"><h1 className="text-3xl font-bold">Calendar</h1><p className="text-muted-foreground">Calendar integration coming soon...</p></div>} />
              <Route path="/calls" element={<div className="p-6"><h1 className="text-3xl font-bold">Calls</h1><p className="text-muted-foreground">Call management coming soon...</p></div>} />
              <Route path="/emails" element={<div className="p-6"><h1 className="text-3xl font-bold">Emails</h1><p className="text-muted-foreground">Email integration coming soon...</p></div>} />
              <Route path="/reports" element={<div className="p-6"><h1 className="text-3xl font-bold">Reports</h1><p className="text-muted-foreground">Advanced reporting coming soon...</p></div>} />
              <Route path="/performance" element={<div className="p-6"><h1 className="text-3xl font-bold">Performance</h1><p className="text-muted-foreground">Performance metrics coming soon...</p></div>} />
              <Route path="/forecasting" element={<div className="p-6"><h1 className="text-3xl font-bold">Forecasting</h1><p className="text-muted-foreground">Sales forecasting coming soon...</p></div>} />
              <Route path="/accounts" element={<div className="p-6"><h1 className="text-3xl font-bold">Accounts</h1><p className="text-muted-foreground">Account management coming soon...</p></div>} />
              <Route path="/settings" element={<div className="p-6"><h1 className="text-3xl font-bold">Settings</h1><p className="text-muted-foreground">System settings coming soon...</p></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
