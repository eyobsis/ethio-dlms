// Import React, the useState and useEffect hooks 
import React, { useState, useEffect } from "react";
// Import the Route and Navigate components  
import { Navigate } from "react-router";
// Import the Util function we created to handle the reading from the local storage 
import getAuth from '../util/auth';

const PrivateAuthRoute = ({ roles, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Retrieve the logged in user from local storage
    const loggedInUser = getAuth();

    console.log(loggedInUser);
    // console.log(loggedInUser);
    loggedInUser.then((response) => {
      if (response.user_role_id) {
        // If in here, that means the user is logged in 
        console.log(response.user_role_id);
        console.log("Set logged in to true");
        setIsLogged(true);
        if (roles && roles.length > 0 && roles.includes(response.user_role_id)) {
          // If in here, that means the user is logged and has  authorization to access the route 
          // console.log("Set authorized to true");
          setIsAuthorized(true);
        }
      }
      setIsChecked(true);
    });
  }, [roles]);
  if (isChecked) {
    if (!isLogged) {
      return <Navigate to="/login" />;
    }
    if (!isAuthorized) {
      return <Navigate to="/unauthorized" />;
    }
  }

  return children;
};

export default PrivateAuthRoute;