import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface CardsProps {
  full_name: string;
  email: string;
  phone: string;
  username: string;
  gender: string;
  active_user: boolean;
  created_at: string;
  role_name: string;
}

function Cards(formData: CardsProps) {



  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-blue-500 text-white">
                <CardHeader>
                  <CardTitle>User Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>Full Name:</strong> {formData.full_name || "N/A"}</p>
                  <p><strong>Email:</strong> {formData.email || "N/A"}</p>
                  <p><strong>Phone:</strong> {formData.phone || "N/A"}</p>
                  <p><strong>Username:</strong> {formData.username || "N/A"}</p>
                  <p><strong>Gender:</strong> {formData.gender || "N/A"}</p>
                  <p><strong>Active User:</strong> {formData.active_user ? "Yes" : "No"}</p>
                  <p><strong>Created At:</strong> {formData.created_at || "N/A"}</p>
                  <p><strong>User Role:</strong> {formData.role_name || "N/A"}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-red-500 text-white">
                <CardHeader>
                  <CardTitle>Appointments</CardTitle>
                </CardHeader>
                <CardContent>You don't have any appointments scheduled yet.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Appointments
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-yellow-500 text-white">
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                </CardHeader>
                <CardContent>Your recent activity will appear here.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Activity
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-green-500 text-white">
                <CardHeader>
                  <CardTitle>Register for License</CardTitle>
                </CardHeader>
                <CardContent>Start your license registration process here.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-purple-500 text-white">
                <CardHeader>
                  <CardTitle>Exams</CardTitle>
                </CardHeader>
                <CardContent>Check your exam schedule and results.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Exams
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-indigo-500 text-white">
                <CardHeader>
                  <CardTitle>Driving Schools</CardTitle>
                </CardHeader>
                <CardContent>Find and manage your driving schools.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Schools
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-teal-500 text-white">
                <CardHeader>
                  <CardTitle>Vehicle Management</CardTitle>
                </CardHeader>
                <CardContent>Manage your vehicles here.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    Manage Vehicles
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-pink-500 text-white">
                <CardHeader>
                  <CardTitle>Payments</CardTitle>
                </CardHeader>
                <CardContent>View and manage your payments here.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Payments
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-orange-500 text-white">
                <CardHeader>
                  <CardTitle>Referrals</CardTitle>
                </CardHeader>
                <CardContent>Refer your friends and family.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    Refer Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
  )
}

export default Cards
