import { useState } from "react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-toastify";
import FileUpload from "../FileUpload/FileUpload";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function RegisterForRenewal() {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    dob: "",
    vehicleType: "",
    licenseNumber: "",
    expirationDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("User data submitted:", formData);
      const response = await axios.post(
        "http://localhost:8000/api/renewLicense",
        formData
      );
      toast.success("User data submitted successfully");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting user data:", error);
      toast.error("Error submitting user data");
    }
  };
  console.log(formData);
  return (
    <div className="w-full bg-[#0B1D3F] text-white">
      <div className="container mx-auto py-12 md:py-20 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            Renew Your Driver's License
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-gray-300 md:text-xl">
            Quickly and securely renew your driver's license online. Follow the
            steps below to get started.
          </p>
        </div>
        <div className="bg-[#0B1D3F] text-white rounded-lg shadow-lg ring-1 ring-gray-200 mx-auto w-full max-w-2xl">
          <div className="p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleUserSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <Label
                    htmlFor="licenseNumber"
                    className="text-gray-500 font-medium"
                  >
                    License Number
                  </Label>
                  <Input
                    id="licenseNumber"
                    placeholder="ABC123456"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="expirationDate"
                    className="text-gray-500 font-medium"
                  >
                    Expiration Date
                  </Label>
                  <Input
                    id="expirationDate"
                    type="date"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main St"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="text"
                      id="dob"
                      placeholder="MM/DD/YYYY"
                      pattern="\d{2}/\d{2}/\d{4}"
                      maxLength={10}
                      className="w-full"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                    <CalendarDaysIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enter your date of birth in the format MM/DD/YYYY.
                  </p>
                </div>
                <div className="space-y-2 text-black">
                  <Label htmlFor="vehicleType">Vehicle Type</Label>
                  <Select
                    value={formData.vehicleType}
                    onValueChange={(value) =>
                      handleSelectChange("vehicleType", value)
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
            <div className="text-black">
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
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarDaysIcon(props: React.SVGProps<SVGSVGElement>) {
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
