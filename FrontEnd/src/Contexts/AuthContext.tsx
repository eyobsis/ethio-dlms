import React, { useState, useEffect, useContext, ReactNode } from "react";
import getAuth from '../util/auth';

// Define the User type based on the provided user data structure
interface User {
  active_user: number;
  created_at: string;
  email: string;
  full_name: string;
  gender: string;
  password: string;
  phone: string;
  role_name: string;
  user_id: number;
  user_role_id: number;
  username: string;
  user_token: string; // Assuming user_token is also a property returned by getAuth
  user_role: string;  // Assuming user_role is also a property returned by getAuth
}

type AuthContextType = {
  isLogged: boolean;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: User = await getAuth();
        const userData = { ...response }; // Destructure the response and save it in userData
        
        if (userData.email) {
          setIsLogged(true);
          if (userData.user_role_id === 2) {
            setIsAdmin(true);
            console.log("User is an admin")
          }else{
            setIsAdmin(false);
            console.log("User is not an admin")
          }
          setUser(userData);
          
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  const value = { isLogged, isAdmin, setIsAdmin, setIsLogged, user };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
