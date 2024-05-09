/**
 * v0 by Vercel.
 * @see https://v0.dev/t/511RHrGJ1o5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Signup() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b1e3b] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Welcome to Drivers DLMS</h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Manage your driver's license and vehicle registration with our secure and user-friendly platform.
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="fullName">
              Full Name
            </label>
            <div className="mt-1">
              <input
                autoComplete="name"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="fullName"
                name="fullName"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email address
            </label>
            <div className="mt-1">
              <input
                autoComplete="email"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <div className="mt-1">
              <input
                autoComplete="username"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="username"
                name="username"
                required
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
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
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                autoComplete="current-password"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="confirmPassword"
                name="confirmPassword"
                required
                type="password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Phone Number
            </label>
            <div className="mt-1">
              <input
                autoComplete="tel"
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="phone"
                name="phone"
                required
                type="tel"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="gender">
              Gender
            </label>
            <div className="mt-1">
              <select
                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                id="gender"
                name="gender"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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
              <a className="font-medium text-[#0b1e3b] hover:text-[#0a1a32]" href="#">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}