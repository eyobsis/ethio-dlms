// src/UserDashboard.tsx
import React, { useState, useEffect } from "react";
import Cards from "./cards";
import Header from "./Header";
import SideBar from "./SideBar";
import ApplicationStatus from "./ApplicationStatus";
import RegisterForNewLicense from "../Pages/RegisterForNewLicense";
import RegisterForRenewal from "../Pages/RegisterForRenewal";
import Exams from "./Exams";
import DrivingSchool from "./DrivingSchool";
import ActivityLog from "./ActivityLog";
import Appointments from "./Appointments";
import Payments from "./Payments";
import Settings from "./Settings";

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
  const [selectedComponent, setSelectedComponent] =
    useState<string>("Dashboard");

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setFormData(JSON.parse(storedUserData));
    }
  }, []);

  const handleMenuSelect = (component: string) => {
    setSelectedComponent(component);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="flex flex-1">
        <SideBar
          full_name={formData.full_name || ""}
          onSelect={handleMenuSelect}
        />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {selectedComponent === "Dashboard" && <Cards {...formData} />}
            {selectedComponent === "RegisterForNewLicense" && (
              <RegisterForNewLicense />
            )}
            {selectedComponent === "RenewLicense" && <RegisterForRenewal />}
            {selectedComponent === "Exams" && <Exams />}
            {selectedComponent === "DrivingSchool" && <DrivingSchool />}
            {selectedComponent === "ActivityLog" && <ActivityLog />}
            {selectedComponent === "Appointments" && <Appointments />}
            {selectedComponent === "Payments" && <Payments />}
            {selectedComponent === "Settings" && <Settings />}
            {selectedComponent === "ApplicationStatus" && <ApplicationStatus />}
          </div>
        </main>
      </div>
    </div>
  );
}
