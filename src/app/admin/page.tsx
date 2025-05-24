
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground mb-6">Admin Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome, Admin!</CardTitle>
          <CardDescription>This is your Aura administration panel. More features coming soon.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>From here, you will be able to manage articles and other site content.</p>
          {/* Placeholder for future dashboard widgets */}
        </CardContent>
      </Card>
    </div>
  );
}
