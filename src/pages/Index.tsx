import { Dashboard } from "@/components/Dashboard";
import { FeedbackForm } from "@/components/FeedbackForm";
import { InstallationForm } from "@/components/InstallationForm";
import { TechnicianForm } from "@/components/TechnicianForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-4">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="technician">Technician</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
          <TabsContent value="technician">
            <TechnicianForm />
          </TabsContent>
          <TabsContent value="installation">
            <InstallationForm />
          </TabsContent>
          <TabsContent value="feedback">
            <FeedbackForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;