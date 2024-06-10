import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileList from './FileList';

interface UploadedFile {
  id: number;
  fileName: string;
}

const FileUpload: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [fetchOnUpload, setFetchOnUpload] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!uploadedFile) return;

    const formData = new FormData();
    formData.append('file', uploadedFile);

    console.log('Uploading file:', uploadedFile);

    try {
      await axios.post('http://localhost:8000/api/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('File uploaded successfully');
      setUploadedFile(null); // Clear selected file after successful upload
      setFetchOnUpload((prev) => !prev); // Toggle fetchOnUpload to trigger useEffect in FileList
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file');
    }
  };

  return (
    <section className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload File</h2>
        <input type="file" onChange={handleFileChange} className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
        <button onClick={handleUpload} className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-300">
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
