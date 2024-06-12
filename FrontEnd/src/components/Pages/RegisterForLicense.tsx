import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

import FileUpload from "../FileUpload/FileUpload";

import { toast } from "react-toastify";

export default function RegisterForLicense() {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    dob: "",
    vehicleType: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you can submit user data using formData
      console.log("User data submitted:", formData);
      // Example:
      await axios.post("http://localhost:8000/api/newRegistrant", formData);
      toast.success("User data submitted successfully");
    } catch (error) {
      console.error("Error submitting user data:", error);
      toast.error("Error submitting user data");
    }
  };
  console.log("User data:", formData);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Driver's License Registration</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form to apply for a new driver's license.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleUserSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="
            Enter your email address"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="123 Main St"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="dob">Date of Birth</Label>
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  id="dob"
                  placeholder="MM/DD/YYYY"
                  pattern="\d{2}/\d{2}/\d{4}"
                  maxLength={10}
                  className="w-full"
                  onChange={handleInputChange}
                />
                <CalendarDaysIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enter your date of birth in the format MM/DD/YYYY.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle-type">Vehicle Type</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, vehicleType: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="rv">RV</SelectItem>
                <SelectItem value="bus">Bus</SelectItem>
                <SelectItem value="tractor">Tractor</SelectItem>
                <SelectItem value="forklift">Forklift</SelectItem>
                <SelectItem value="scooter">Scooter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="w-full bg-[#1e3a8a] text-white">
          Submit User Data
        </Button>
      </form>

      <FileUpload
        uploadUrl="http://localhost:8000/api/file/upload"
        title="Upload ID Card"
      />
      <FileUpload
        uploadUrl="http://localhost:8000/api/file/upload"
        title="Upload Birth Certificate"
      />
      <FileUpload
        uploadUrl="http://localhost:8000/api/file/upload"
        title="Upload Medical PDF"
      />
      <FileUpload
        uploadUrl="http://localhost:8000/api/file/upload"
        title="Upload Photo"
      />
    </div>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
