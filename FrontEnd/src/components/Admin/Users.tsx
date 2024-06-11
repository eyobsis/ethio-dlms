import React, { useState, useEffect } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import Login from '../../Login';
import AdminMenu from "./AdminMenu/AdminMenu";

interface User {
  user_id: number;
  full_name: string;
  email: string;
  username: string;
  phone: string;
  gender: string;
  active_user: boolean;
  created_at: string;
  role_name: string;
}

const UsersList: React.FC = () => {
  const { isLogged, isAdmin } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const backendUrl = `${import.meta.env.VITE_BACKEND_URL}`;

  useEffect(() => {
    const fetchUsers = async () => {
      if (isLogged && isAdmin) {
        try {
          const response = await fetch(`${backendUrl}/api/getAllUsers`);
          console.log(response);
          if (!response.ok) {
            throw new Error('Failed to fetch users');
          }
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
    };

    fetchUsers();
  }, [isLogged, isAdmin, backendUrl]);

  if (!isLogged) {
    return (
      <div className="container mx-auto mt-8">
        <Login />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-center text-2xl font-bold">You are not authorized to access this page</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-3">
          <AdminMenu />
        </div>
        <div className="col-span-9">
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Active</th>
                <th>Created At</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.full_name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.gender}</td>
                  <td>{user.active_user ? 'Yes' : 'No'}</td>
                  <td>{user.created_at}</td>
                  <td>{user.role_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
