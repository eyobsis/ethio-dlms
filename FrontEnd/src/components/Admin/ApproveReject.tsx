import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApproveReject = () => {
  const [trainees, setTrainees] = useState([]);
  const [renewals, setRenewals] = useState([]);
  const [traineeApprovals, setTraineeApprovals] = useState([]);
  const [renewalApprovals, setRenewalApprovals] = useState([]);

  useEffect(() => {
    fetchTrainees();
    fetchRenewals();
    fetchTraineeApprovals();
    fetchRenewalApprovals();
  }, []);

  const fetchTrainees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/getAllTrainees"
      );
      setTrainees(response.data);
    } catch (error) {
      console.error("Error fetching trainees:", error);
    }
  };

  const fetchRenewals = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/getAllRenewals"
      );
      setRenewals(response.data);
    } catch (error) {
      console.error("Error fetching renewals:", error);
    }
  };

  const fetchTraineeApprovals = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/approval/trainee"
      );
      setTraineeApprovals(response.data);
    } catch (error) {
      console.error("Error fetching trainee approvals:", error);
    }
  };

  const fetchRenewalApprovals = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/approval/renewal"
      );
      setRenewalApprovals(response.data);
    } catch (error) {
      console.error("Error fetching renewal approvals:", error);
    }
  };

  const handleApprove = async (type, id) => {
    const url =
      type === "trainee"
        ? "http://localhost:8000/api/approval/trainee/approve"
        : "http://localhost:8000/api/approval/renewal/approve";
    try {
      await axios.post(url, {
        [`${type}_id`]: id,
        admin_comment: "Approved by admin",
      });
      type === "trainee" ? fetchTraineeApprovals() : fetchRenewalApprovals();
      toast.success(`Successfully approved ${type}`);
    } catch (error) {
      console.error(`Error approving ${type}:`, error);
      toast.error(`Error approving ${type}`);
    }
  };

  const handleReject = async (type, id) => {
    const url =
      type === "trainee"
        ? "http://localhost:8000/api/approval/trainee/reject"
        : "http://localhost:8000/api/approval/renewal/reject";
    try {
      await axios.post(url, {
        [`${type}_id`]: id,
        admin_comment: "Rejected by admin",
      });
      type === "trainee" ? fetchTraineeApprovals() : fetchRenewalApprovals();
      toast.success(`Successfully rejected ${type}`);
    } catch (error) {
      console.error(`Error rejecting ${type}:`, error);
      toast.error(`Error rejecting ${type}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Trainee Approvals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainees.map((trainee) => (
            <div
              key={trainee.trainee_id}
              className="bg-white p-4 shadow rounded"
            >
              <p className="font-bold">{trainee.email}</p>
              <div className="mt-2">
                <button
                  onClick={() => handleApprove("trainee", trainee.trainee_id)}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject("trainee", trainee.trainee_id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mt-8 mb-4">
          Approved/Rejection Status
        </h2>
        {traineeApprovals.map((approval) => (
          <div
            key={approval.approval_id}
            className="bg-white p-4 shadow rounded mb-4"
          >
            <p>
              Trainee ID: {approval.trainee_id}, Status: {approval.status},
              Comment: {approval.admin_comment}
            </p>
          </div>
        ))}
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4">Renewal Approvals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renewals.map((renewal) => (
            <div
              key={renewal.renewal_id}
              className="bg-white p-4 shadow rounded"
            >
              <p className="font-bold">{renewal.email}</p>
              <div className="mt-2">
                <button
                  onClick={() => handleApprove("renewal", renewal.renewal_id)}
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject("renewal", renewal.renewal_id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold mt-8 mb-4">
          Approved/Rejection Status
        </h2>
        {renewalApprovals.map((approval) => (
          <div
            key={approval.approval_id}
            className="bg-white p-4 shadow rounded mb-4"
          >
            <p>
              Renewal ID: {approval.renewal_id}, Status: {approval.status},
              Comment: {approval.admin_comment}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ApproveReject;
