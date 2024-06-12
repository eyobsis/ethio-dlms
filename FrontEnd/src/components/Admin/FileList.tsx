import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface File {
  file_id: number;
  fileName: string;
  filePath: string;
  user_id: number;
  createdAt: string;
}

interface User {
  user_id: number;
  full_name: string;
  username: string;
  email: string;
  password: string;
  gender: string;
  phone: string;
  active_user: number;
  created_at: string;
}

const FileList: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchFilesAndUsers = async () => {
      try {
        const fileResponse = await axios.get(
          "http://localhost:8000/api/file/getAllFiles"
        );
        const fetchedFiles = fileResponse.data;
        console.log("Files:", fetchedFiles);
        setFiles(fetchedFiles);

        // Fetch users after setting files state
        await fetchUsers(fetchedFiles);
      } catch (error) {
        console.error("Error fetching files:", error);
        toast.error("Failed to fetch files");
      }
    };

    const fetchUsers = async (files: File[]) => {
      try {
        const userIds = [...new Set(files.map((file) => file.user_id))].filter(
          (id) => id !== 0
        );
        console.log("User IDs:", userIds);

        const userResponses = await Promise.all(
          userIds.map((userId) =>
            axios.get(`http://localhost:8000/api/getUserById/${userId}`)
          )
        );

        const fetchedUsers = userResponses.map(
          (response) => response.data.data
        );
        console.log("Users:", fetchedUsers);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users");
      }
    };

    fetchFilesAndUsers();
  }, []);

  const renderThumbnail = (file: File) => {
    const fileExtension = file.filePath.split(".").pop()?.toLowerCase();
    if (fileExtension === "pdf") {
      return (
        <img src="/pdf-thumbnail.png" alt="PDF Thumbnail" className="w-5 h-5" />
      );
    } else {
      return (
        <img
          src={`http://localhost:8000/${file.filePath}`}
          alt={file.fileName}
          className="w-16 h-16"
        />
      );
    }
  };

  const getUploaderName = (userId: number) => {
    const user = users.find((user) => user.user_id === userId);
    return user ? user.full_name : "Unknown";
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {files.map((file) => (
          <div key={file.file_id} className="bg-gray-200 p-4 rounded-lg">
            <img
              src={`http://localhost:8000/${file.filePath}`}
              alt={file.fileName}
              className="w-20 h-20"
            />
            <div className="text-center mt-2">
              <p className="text-sm font-semibold">{file.fileName}</p>
              <p className="text-xs text-gray-500">{file.createdAt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8">
        <table className="table-auto w-full bg-blue-900 text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Active User</th>
              <th className="px-4 py-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td className="border px-4 py-2">{user.full_name}</td>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.gender}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">{user.active_user}</td>
                <td className="border px-4 py-2">{user.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-8">
        <table className="table-auto w-full bg-blue-900 text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Thumbnail</th>
              <th className="px-4 py-2">File Name</th>
              <th className="px-4 py-2">Uploader</th>
              <th className="px-4 py-2">View File</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.file_id}>
                <td className="border px-4 py-2">{renderThumbnail(file)}</td>
                <td className="border px-4 py-2">{file.fileName}</td>
                <td className="border px-4 py-2">
                  {getUploaderName(file.user_id)}
                </td>
                <td className="border px-4 py-2">
                  <a
                    href={`http://localhost:8000/${file.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline"
                  >
                    View File
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FileList;
