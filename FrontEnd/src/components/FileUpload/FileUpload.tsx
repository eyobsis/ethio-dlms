import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { FaFilePdf, FaTrash, FaEye } from 'react-icons/fa';

interface FileUploadProps {
  onUploadSuccess: (fileUrl: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setUploadError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progressPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(progressPercentage);
        },
      });

      const fileUrl = response.data.fileUrl;
      onUploadSuccess(fileUrl);
      setFiles([...files, file]);
      setFile(null);
    } catch (error) {
      setUploadError('Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = (fileName: string) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  const handleView = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-dark-blue-500 p-4">
      <div 
        {...getRootProps()} 
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 p-6 rounded-lg text-center cursor-pointer w-full max-w-md"
      >
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p className="text-white">Drop the file here...</p>
          ) : (
            <p className="text-white">Drag and drop a file or click to select</p>
          )
        }
      </div>
      {file && (
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-white">{file.name}</p>
          <p className="text-white">{(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
      {uploading && (
        <div className="flex flex-col justify-center items-center mt-4 w-full">
          <p className="text-white">Uploading...</p>
          <progress value={progress} max="100" className="w-full h-2 rounded-full bg-dark-blue-300" />
        </div>
      )}
      {uploadError && (
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-red-500">{uploadError}</p>
        </div>
      )}
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
      <div className="mt-4 w-full px-4">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between bg-red-100 p-2 rounded-md mt-2">
            <div className="flex items-center">
              <FaFilePdf className="text-red-500 mr-2" />
              <span>{file.name}</span>
            </div>
            <div className="flex items-center">
              <button onClick={() => handleView(file)} className="mr-2">
                <FaEye className="text-orange-500" />
              </button>
              <button onClick={() => handleDelete(file.name)}>
                <FaTrash className="text-orange-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
