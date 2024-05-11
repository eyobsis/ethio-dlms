import  { useState } from'react';
import { useNavigate, useLocation } from "react-router-dom";
import logIn  from '../services/loginservice';


export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [employee_email, setEmail] = useState('');
  const [employee_password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle client side validations here 
    let valid = true; // Flag 
    // Email validation
    if (!employee_email) {
      setEmailError('Please enter your email address first');
      valid = false;
    } else if (!employee_email.includes('@')) {
      setEmailError('Invalid email format');
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(employee_email)) {
        setEmailError('Invalid email format');
        valid = false;
      } else {
        setEmailError('');
      }
    }
    // Password has to be at least 6 characters long
    if (!employee_password || employee_password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      valid = false;
    } else {
      setPasswordError('');
    }
    if (!valid) {
      return;
    }
    // Handle form submission here
    const formData = {
      employee_email,
      employee_password
    };
    console.log(formData);
    // Call the service
    const loginEmployee = logIn(formData);
    console.log(loginEmployee);
    loginEmployee
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // Save the user in the local storage
          if (response.data.employee_token) {
            console.log(response.data);
            localStorage.setItem("employee", JSON.stringify(response.data));
          }
          // Redirect the user to the dashboard
          // navigate('/admin');
          console.log(location);
          if (location.pathname === '/login') {
            // navigate('/admin');
            // window.location.replace('/admin');
            // To home for now 
            window.location.replace('/');
          } else {
            window.location.reload();
          }
        } else {
          // Show an error message
          setServerError(response.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setServerError('An error has occurred. Please try again later.' + err);
      });

  };


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b1e3b] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to Drivers DLMS
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Manage your driver's license and vehicle registration
            with our secure and user-friendly platform.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="mt-1">

            {serverError && <div className="validation-error" role="alert">{serverError}</div>}
                      
                     
              <input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="email"
                name="employee_email"
                required
                type="email"
                value={employee_email}
                onChange={(event) => setEmail(event.target.value)}
              />
               {emailError && <div className="validation-error" role="alert">{emailError}</div>}


            </div>
          </div>

          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              autoComplete="current-password"
              className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
              id="password"
              name="employee_password"
              required
              type="password"
              value={employee_password}
              onChange={(event) => setPassword(event.target.value)}
            />

{passwordError && <div className="validation-error" role="alert">{passwordError}</div>}
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-[#0b1e3b] py-2 px-4 text-sm font-medium text-white hover:bg-[#0a1a32] focus:outline-none focus:ring-2 focus:ring-[#0b1e3b] focus:ring-offset-2"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              You have no account?
              <a
                className="font-medium text-[#0b1e3b] hover:text-[#0a1a32]"
                href="/Signup"
              >
                Signup
              </a>
            </p>
          </div>
       
          
        </form>
      </div>
    </div>
  );
}

