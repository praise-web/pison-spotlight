import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, LogOut } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface Order {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  cv_type: string;
  payment_option: string;
  status: string;
  created_at: string;
  current_job_title: string | null;
  linkedin_profile: string | null;
  number_of_roles: number | null;
  rush_delivery: boolean | null;
  extras: string[] | null;
}

const Admin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/login");
        return;
      }

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError) {
        console.error("Error checking admin role:", roleError);
        toast.error("Error checking permissions");
        navigate("/");
        return;
      }

      if (!roleData) {
        toast.error("Access denied. Admin privileges required.");
        navigate("/");
        return;
      }

      setIsAdmin(true);
      await loadOrders();
    } catch (error) {
      console.error("Error checking admin access:", error);
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  };

  const loadOrders = async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setOrders(data || []);
    } catch (error: any) {
      toast.error("Failed to load orders");
      console.error("Error loading orders:", error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`flex justify-between items-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage submitted orders</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Card 
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CardHeader>
            <CardTitle>All Orders ({orders.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>CV Type</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        {new Date(order.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">{order.full_name}</TableCell>
                      <TableCell>{order.email}</TableCell>
                      <TableCell>{order.phone_number}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{order.cv_type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{order.payment_option}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={order.status === "pending" ? "default" : "secondary"}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm space-y-1">
                          {order.current_job_title && (
                            <p className="text-muted-foreground">
                              Job: {order.current_job_title}
                            </p>
                          )}
                          {order.number_of_roles && (
                            <p className="text-muted-foreground">
                              Roles: {order.number_of_roles}
                            </p>
                          )}
                          {order.rush_delivery && (
                            <Badge variant="destructive" className="text-xs">
                              Rush Delivery
                            </Badge>
                          )}
                          {order.extras && order.extras.length > 0 && (
                            <p className="text-muted-foreground text-xs">
                              Extras: {order.extras.join(", ")}
                            </p>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
