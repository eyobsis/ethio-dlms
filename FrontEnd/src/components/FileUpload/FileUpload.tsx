import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getAuth from "../../util/auth";

interface AuthResponse {
  user_id: string;
}

interface FileUploadProps {
  uploadUrl: string;
  title: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ uploadUrl, title }) => {
  const [user, setUser] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fetchOnUpload, setFetchOnUpload] = useState<boolean>(false);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const response: AuthResponse = await getAuth();
        console.log("User authenticated:", response.user_id);
        setUser(response.user_id);
      } catch (error) {
        console.error("Error fetching auth:", error);
        toast.error("Failed to authenticate user");
      }
    };

    fetchAuth();
  }, []);

  console.log("User:", user);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.warning("No file selected");
      return;
    }

    if (!user) {
      toast.error("User not authenticated");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log("Uploading file:", file);

    try {
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Ensure correct case as expected by backend
          userid: user,
        },
      });
      console.log("File upload response:", response);
      toast.success("File uploaded successfully");
      setFile(null); // Clear selected file after successful upload
      setFetchOnUpload((prev) => !prev); // Toggle fetchOnUpload to trigger useEffect in FileList
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        toast.error(
          `Error uploading file: ${
            error.response?.data?.message || error.message
          }`
        );
      } else {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error occurred");
      }
    }
  };

  return (
    <section className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={handleUpload}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-300"
        >
          Upload
        </button>
      </div>
      <ToastContainer position="top-right" />
    </section>
  );
};

export default FileUpload;
