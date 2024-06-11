import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileList from './FileList';
import getAuth from "../../util/auth";

const FileUpload: React.FC = () => {
  const user = getAuth;
  user.then((responce) => {
    console.log(responce.user_id);
    const userId = responce.user_id;
    console.log(userId);
  });
  console.log(user);

  console.log(userId);
  const [file, setFile] = useState<File | null>(null);
  const [fetchOnUpload, setFetchOnUpload] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    console.log("Uploading file:", file);

    try {
      await axios.post("http://localhost:8000/api/file/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          UserId: userId,
        },
      });
      toast.success("File uploaded successfully");
      setFile(null); // Clear selected file after successful upload
      setFetchOnUpload((prev) => !prev); // Toggle fetchOnUpload to trigger useEffect in FileList
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Error uploading file");
    }
  };

  return (
    <section className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload File</h2>
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
      <div className="mt-8">
        <FileList fetchOnUpload={fetchOnUpload} />
      </div>
      <ToastContainer position="top-right" />
    </section>
  );
};

export default FileUpload;
