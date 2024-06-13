import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import logOut from "@/services/loginservice";
export default function Navbar() {
  const navigate = useNavigate();
  const { isLogged, isAdmin, setIsAdmin, setIsLogged, user } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const handleLogout = () => {
    // Clear localStorage keys for token and user
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Redirect to the home page

    setIsLogged(false);
    logOut();
    navigate("/login");
  };

  console.log(user);

  return (
    <header className="flex items-center justify-between h-16 px-4 bg-dark-blue-900 shadow-lg text-black md:px-6">
      <Link className="flex items-center gap-2" to="/">
        <span className="text-lg font-semibold tracking-tight">
          <img
            src={"../public/logologo.png"}
            alt="Dlms"
            style={{ height: "200px", width: "200px", backgroundColor: "" }}
          />
        </span>
      </Link>
      <nav className="hidden md:flex md:items-center md:gap-6">
        <LinkButton to="/">Home</LinkButton>
        <LinkButton to="/about">About</LinkButton>
        <LinkButton to="/services">Services</LinkButton>
        <LinkButton to="/contact">Contact</LinkButton>

        {localStorage.getItem("user") ? (
          // If user is logged in (user key exists in localStorage), render Logout link
          <Button onClick={handleLogout} className="nav-link">
            Logout
          </Button>
        ) : (
          // If user is not logged in, render Login and SignUp links
          <>
            <LinkButton to="/login">Login</LinkButton>
            <LinkButton to="/signup">SignUp</LinkButton>
          </>
        )}

        <div className="flex items-center gap-2 text-sm font-medium text- dark:text-gray-400 ">
          <LocateIcon className="h-5 w-5" />
          <span>Ethiopia</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-8 w-8 border border-gray-200 dark:border-gray-800 text-black">
              <AvatarImage
                alt={user?.full_name}
                src="https://imgs.search.brave.com/ww5k7GZKu3CaMGwAsbPlFlyM7ogaHe2ZnHdOvxrz9kE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to="/user/dashboard">
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </Link>

            <Link to="/license-renewal-steps">
              <DropdownMenuItem>RenewMyLicense</DropdownMenuItem>
            </Link>

            <Link to="/register-for-new-license">
              <DropdownMenuItem>RegisterForNewLicense</DropdownMenuItem>
            </Link>

            <Link to="/">
              <DropdownMenuItem>Home</DropdownMenuItem>
            </Link>

            <Link to="/settings">
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button onClick={handleLogout}>Logout</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <nav className="flex items-center gap-6 text-white">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex justify-center w-full">
                Menu
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <Link to="/" className="block" onClick={() => setOpen(false)}>
                <DropdownMenuItem>Home</DropdownMenuItem>
              </Link>
              <Link
                to="/user/dashboard"
                className="block"
                onClick={() => setOpen(false)}
              >
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </Link>
              <Link
                to="/register"
                className="block"
                onClick={() => setOpen(false)}
              >
                <DropdownMenuItem>register</DropdownMenuItem>
              </Link>
              <Link
                to="/contact"
                className="block"
                onClick={() => setOpen(false)}
              >
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              {isLogged ? (
                <DropdownMenuItem>
                  <Button
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              ) : (
                <Link
                  to="/login"
                  className="block"
                  onClick={() => setOpen(false)}
                >
                  <DropdownMenuItem>Login</DropdownMenuItem>
                </Link>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 p-4">
            <LinkButton to="/">Home</LinkButton>
            <LinkButton to="/about">About</LinkButton>
            <LinkButton to="/services">Services</LinkButton>
            <LinkButton to="/contact">Contact</LinkButton>
            <LinkButton to="/license-renewal-steps">RenewMyLicense</LinkButton>
            <LinkButton to="/register-for-new-license">
              RegisterForNewLicense
            </LinkButton>
            <LinkButton to="/login">Login</LinkButton>
            <LinkButton to="/">Logout</LinkButton>
            {localStorage.getItem("user") ? (
              // If user is logged in (user key exists in localStorage), render Logout link
              <Button onClick={handleLogout} className="nav-link">
                Logout
              </Button>
            ) : (
              // If user is not logged in, render Login and SignUp links
              <>
                <LinkButton to="/login">Login</LinkButton>
                <LinkButton to="/signup">SignUp</LinkButton>
              </>
            )}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex items-center gap-2"
                    size="icon"
                    variant="outline"
                  >
                    <GlobeIcon className="h-4 w-4" />
                    <span className="sr-only">Language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>---</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition duration-300 ease-in-out active:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {children}
    </Link>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
