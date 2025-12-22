import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, LogOut, Pencil, Mail } from "lucide-react";

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

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface UserRole {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [users, setUsers] = useState<UserRole[]>([]);
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState<string | null>(null);

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
      await Promise.all([loadOrders(), loadUsers(), loadWaitlist()]);
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

  const loadUsers = async () => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setUsers(data || []);
    } catch (error: any) {
      toast.error("Failed to load users");
      console.error("Error loading users:", error);
    }
  };

  const loadWaitlist = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from("waitlist")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setWaitlist(data || []);
    } catch (error: any) {
      toast.error("Failed to load waitlist");
      console.error("Error loading waitlist:", error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/login");
  };

  const handleEditOrder = (order: Order) => {
    setEditingOrder({ ...order });
    setIsEditDialogOpen(true);
  };

  const handleSaveOrder = async () => {
    if (!editingOrder) return;

    try {
      const { error } = await supabase
        .from("orders")
        .update({
          full_name: editingOrder.full_name,
          email: editingOrder.email,
          phone_number: editingOrder.phone_number,
          status: editingOrder.status,
          current_job_title: editingOrder.current_job_title,
        })
        .eq("id", editingOrder.id);

      if (error) throw error;

      toast.success("Order updated successfully");
      setIsEditDialogOpen(false);
      setEditingOrder(null);
      await loadOrders();
    } catch (error: any) {
      toast.error("Failed to update order");
      console.error("Error updating order:", error);
    }
  };

  const handleResendEmail = async (order: Order) => {
    setIsSendingEmail(order.id);
    try {
      const { data, error } = await supabase.functions.invoke("submit-order", {
        body: {
          fullName: order.full_name,
          email: order.email,
          phoneNumber: order.phone_number,
          cvType: order.cv_type,
          paymentOption: order.payment_option,
          currentJobTitle: order.current_job_title,
          linkedinProfile: order.linkedin_profile,
          numberOfRoles: order.number_of_roles,
          rushDelivery: order.rush_delivery,
          extras: order.extras,
          resendOnly: true,
        },
      });

      if (error) throw error;

      toast.success(`Confirmation email resent to ${order.email}`);
    } catch (error: any) {
      toast.error("Failed to resend email");
      console.error("Error resending email:", error);
    } finally {
      setIsSendingEmail(null);
    }
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage submitted orders</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="submissions">
          <TabsList className="grid w-full grid-cols-3 max-w-lg">
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>
          
          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle>All Submissions ({orders.length})</CardTitle>
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
                        <TableHead>Actions</TableHead>
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
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEditOrder(order)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleResendEmail(order)}
                                disabled={isSendingEmail === order.id}
                              >
                                {isSendingEmail === order.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Mail className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="waitlist">
            <Card>
              <CardHeader>
                <CardTitle>Waitlist Entries ({waitlist.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {waitlist.map((entry) => (
                        <TableRow key={entry.id}>
                          <TableCell>
                            {new Date(entry.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="font-medium">{entry.name}</TableCell>
                          <TableCell>{entry.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>All Users ({users.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Created At</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-mono text-sm">{user.user_id}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(user.created_at).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Edit Order Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Order</DialogTitle>
            </DialogHeader>
            {editingOrder && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    value={editingOrder.full_name}
                    onChange={(e) =>
                      setEditingOrder({ ...editingOrder, full_name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={editingOrder.email}
                    onChange={(e) =>
                      setEditingOrder({ ...editingOrder, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={editingOrder.phone_number}
                    onChange={(e) =>
                      setEditingOrder({ ...editingOrder, phone_number: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job_title">Current Job Title</Label>
                  <Input
                    id="job_title"
                    value={editingOrder.current_job_title || ""}
                    onChange={(e) =>
                      setEditingOrder({ ...editingOrder, current_job_title: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={editingOrder.status}
                    onValueChange={(value) =>
                      setEditingOrder({ ...editingOrder, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveOrder}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Admin;
