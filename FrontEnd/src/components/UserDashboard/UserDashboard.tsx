import { useState, useEffect } from "react";
import Cards from "./cards";
import Header from "./Header";
import SideBar from "./SideBar";

interface User {
  user_id: number;
  password: string;
  full_name: string;
  email: string;
  username: string;
  phone: string;
  gender: string;
  active_user: number;
  created_at: string;
  user_role_id: number;
  role_name: string;
}

export default function UserDashboard() {
  const [formData, setFormData] = useState<Partial<User>>({});

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setFormData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Cards {...formData} />
          </div>
        </main>
        <SideBar full_name={formData.full_name || ""} />
      </div>
    </div>
  );
}
