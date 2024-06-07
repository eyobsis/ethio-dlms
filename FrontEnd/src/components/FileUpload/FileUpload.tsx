import React, { useState } from'react';
import axios from 'axios';
import { useDropzone } from'react-dropzone';

interface FileUploadProps {
  onUploadSuccess: (fileUrl: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
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
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type':'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progressPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(progressPercentage);
        },
      });

      const fileUrl = response.data.fileUrl;
      onUploadSuccess(fileUrl);
    } catch (error) {
      setUploadError('Error uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-dark-blue-500"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {
        isDragActive? (
          <p className="text-white">Drop the file here...</p>
        ) : (
          <p className="text-white">Drag and drop a file or click to select</p>
        )
      }
      {file && (
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-white">{file.name}</p>
          <p className="text-white">{file.size} bytes</p>
        </div>
      )}
      {uploading && (
        <div className="flex flex-col justify-center items-center mt-4">
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
        className="bg-dark-blue-700 hover:bg-dark-blue-800 text-white font-bold py-2 px-4 rounded"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
};

export default FileUpload;