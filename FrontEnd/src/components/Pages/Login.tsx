//Login.tsx
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { logIn } from "../../services/loginservice";
interface LoginResponse {
  status: number;
  data: {
    user_token?: string;
    [key: string]: any;
  };
  message: string;
  token: string;
}

export default function Login({}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Client-side validation
    let valid = true;

    if (!email) {
      setEmailError("Please enter your email address first");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password || password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    try {
      const data = await logIn({ email, password });

      console.log("Response data:", data);

      if (data.status === 200) {
        navigate("/services");
      } else {
        if (data.status === 401) {
          setServerError("Invalid email or password. Please try again.");
        } else {
          setServerError(
            "An unexpected error occurred. Please try again later."
          );
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setServerError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b1e3b] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to Gebeya Tech E-commerce
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Your Gateway to Seamless Shopping!
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
              {serverError && (
                <div className="validation-error text-red-500" role="alert">
                  {serverError}
                </div>
              )}
              <input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="email"
                name="email"
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {emailError && (
                <div className="validation-error text-red-500" role="alert">
                  {emailError}
                </div>
              )}
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
              name="password"
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && (
              <div className="validation-error text-red-500" role="alert">
                {passwordError}
              </div>
            )}
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
              <Link
                to={"/signup"}
                className="font-medium text-[#0b1e3b] hover:text-[#0a1a32]"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
