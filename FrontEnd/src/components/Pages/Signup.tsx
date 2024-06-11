//signup.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import userservice from "../../services/userservice";
import { useAuth } from "../../Contexts/AuthContext";

interface FormData {
  fullName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: string;
  user_role_id: number;
  active_user: number;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    user_role_id: 1,
    active_user: 1,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [emailError, setEmailError] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();
  let loggedInUserToken = user?.user_token || "";

  useEffect(() => {
    if (formData.email === "admin@admin.com") {
      setFormData((prevState) => ({
        ...prevState,
        user_role_id: 2,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        user_role_id: 1,
      }));
    }
  }, [formData.email]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    let valid = true;

    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
      setEmailError("Please enter your email address");
      valid = false;
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
      setEmailError("Invalid email format");
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(formData.email)) {
        newErrors.email = "Invalid email format";
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    const phoneRegex = /^(\+251|0)?9\d{8}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Phone number is not valid. Must be in format +251912345678 or 0912345678";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await userservice.createUser(
        formData,
        loggedInUserToken
      );
      const data = await response.json();

      if (data.error) {
        setServerError(data.error);
      } else {
        setSuccess(true);
        setServerError("");
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      setServerError(error.message || error.toString());
    }
  };

  const Popup = () => (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-4">Success!</h3>
        <p>Your registration was successful. You will be redirected shortly.</p>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b1e3b] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h4 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-950">
            Welcome to ETHIO-DLMS <br />
          </h4>
          <p className="mt-2 text-center text-sm text-gray-500">
            signup To get Your Services
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {serverError && <div className="text-red-500">{serverError}</div>}
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <div className="mt-1">
              <input
                autoComplete="name"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName}</div>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {emailError && <div className="text-red-500">{emailError}</div>}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                autoComplete="username"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="text-red-500">{errors.username}</div>
              )}
            </div>
          </div>
          <div>
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
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                autoComplete="current-password"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="text-red-500">{errors.confirmPassword}</div>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                autoComplete="tel"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <div className="text-red-500">{errors.phone}</div>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="gender"
            >
              Gender
            </label>
            <div className="mt-1">
              <select
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="text-red-500">{errors.gender}</div>
              )}
            </div>
          </div>
          <div>
            <button
              className="flex w-full justify-center rounded-md bg-[#0b1e3b] py-2 px-4 text-sm font-medium text-white hover:bg-[#0a1a32] focus:outline-none focus:ring-2 focus:ring-[#0b1e3b] focus:ring-offset-2"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-[#0b1e3b] hover:text-[#0a1a32]"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      {showPopup && <Popup />}
    </div>
  );
}
