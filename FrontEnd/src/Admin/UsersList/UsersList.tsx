// Import the necessary components 
import React, { useState, useEffect } from "react";
// Import the auth hook  
import { useAuth } from "../../Contexts/AuthContext";
// Import the date-fns library 
import { format } from 'date-fns'; // To properly format the date on the table 
// Import the getAllusers function  
import userservice from "../../services/userservice";

// Define types for the user data
interface User {
  user_id: string;
  active_user: boolean;
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_phone: string;
  added_date: string;
  company_role_name: string;
}

// Create the usersList component 
const UsersList: React.FC = () => {
  // Create all the states we need to store the data
  const [users, setUsers] = useState<User[]>([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState<string | null>(null);

  // To get the logged in user token
  const { user } = useAuth();
  let token = user ? user.user_token : null;

  useEffect(() => {
    // Call the getAllusers function 
    userservice.getAllusers(token).then((res) => {
      if (!res.ok) {
        console.log(res.status);
        setApiError(true);
        if (res.status === 401) {
          setApiErrorMessage("Please login again");
        } else if (res.status === 403) {
          setApiErrorMessage("You are not authorized to view this page");
        } else {
          setApiErrorMessage("Please try again later");
        }
      }
      return res.json();
    }).then((data) => {
      if (data.data.length !== 0) {
        setUsers(data.data);
      }
    }).catch((err) => {
      setApiError(true);
      setApiErrorMessage("An error occurred. Please try again later.");
      console.error(err);
    });
  }, [token]);

  return (
    <>
      {apiError ? (
        <section className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold">{apiErrorMessage}</h2>
          </div>
        </section>
      ) : (
        <section className="p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">Users</h2>
            </div>
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 px-4 border">Active</th>
                  <th className="py-2 px-4 border">First Name</th>
                  <th className="py-2 px-4 border">Last Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Phone</th>
                  <th className="py-2 px-4 border">Added Date</th>
                  <th className="py-2 px-4 border">Role</th>
                  <th className="py-2 px-4 border">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.user_id}>
                    <td className="py-2 px-4 border">{user.active_user ? "Yes" : "No"}</td>
                    <td className="py-2 px-4 border">{user.user_first_name}</td>
                    <td className="py-2 px-4 border">{user.user_last_name}</td>
                    <td className="py-2 px-4 border">{user.user_email}</td>
                    <td className="py-2 px-4 border">{user.user_phone}</td>
                    <td className="py-2 px-4 border">{format(new Date(user.added_date), 'MM-dd-yyyy | kk:mm')}</td>
                    <td className="py-2 px-4 border">{user.company_role_name}</td>
                    <td className="py-2 px-4 border">
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:underline">edit</button>
                        <button className="text-red-500 hover:underline">delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  );
}

// Export the UsersList component 
export default UsersList;
