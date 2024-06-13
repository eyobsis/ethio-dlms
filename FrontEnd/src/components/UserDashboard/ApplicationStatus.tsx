import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface ApplicationStatusProps {}

const ApplicationStatus: React.FC<ApplicationStatusProps> = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [traineeStatus, setTraineeStatus] = useState<string | null>(null);
  const [renewalStatus, setRenewalStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchApplicationStatus();
  }, []);

  const fetchApplicationStatus = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setUserId(user.user_id);

      // Send userId as form data
      const formData = new FormData();
      formData.append("userId", user.user_id);
      console.log(formData.getAll("userId"));

      const responseTrainee = await axios.post(
        "http://localhost:8000/api/trainee/status",
        `userId=${user.user_id}`
      );
      setTraineeStatus(responseTrainee.data.status);

      const responseRenewal = await axios.post(
        "http://localhost:8000/api/renewal/status",
       `userId=${user.user_id}`
      );
      setRenewalStatus(responseRenewal.data.status);
    } catch (error) {
      console.error("Error fetching application status:", error);
      toast.error("Failed to fetch application status");
    }
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "approved":
        return "bg-green-500";
      case "rejected":
        return "bg-red-500";
      case "pending":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string | null) => {
    switch (status) {
      case "approved":
        return "Approved";
      case "rejected":
        return "Rejected";
      case "pending":
        return "Pending";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center">
        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center mr-2 ${getStatusColor(
            traineeStatus
          )} text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
        >
          {traineeStatus ? getStatusText(traineeStatus).charAt(0) : "-"}
        </div>
        <span className="text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Trainee Application Status:{" "}
          {traineeStatus ? getStatusText(traineeStatus) : "Loading..."}
        </span>
      </div>

      <div className="flex items-center">
        <div
          className={`rounded-full h-8 w-8 flex items-center justify-center mr-2 ${getStatusColor(
            renewalStatus
          )} text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
        >
          {renewalStatus ? getStatusText(renewalStatus).charAt(0) : "-"}
        </div>
        <span className="text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Renewal Application Status:{" "}
          {renewalStatus ? getStatusText(renewalStatus) : "Loading..."}
        </span>
      </div>
    </div>
  );
};

export default ApplicationStatus;
