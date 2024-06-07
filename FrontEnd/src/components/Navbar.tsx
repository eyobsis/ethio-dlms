/**
 * v0 by Vercel.
 * @see https://v0.dev/t/7qbHoBhMXRQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import {Link} from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-white shadow-lg dark:bg-gray-950 md:px-6">
      <Link className="flex items-center gap-2" to="/">
        
        <span className="text-lg font-semibold tracking-tight">

          <img src={'../public/logologo.png'} alt="Dlms" style={{
            height: '200px',
            width: '200px',
            backgroundColor:''
            
          
          }}/>
        </span>
      </Link>
      <nav className="hidden md:flex md:items-center md:gap-6">
        <Link
          aria-current="page"
          className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
          to="/services"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
          to="login"
        >
          Login
        </Link>
        <Link
          className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
          to="/signup"
        >
          SignUp
        </Link>
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex items-center gap-2" size="icon" variant="outline">
                <GlobeIcon className="h-4 w-4" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Select Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FlagIcon className="mr-2 h-4 w-4" />
                English
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FlagIcon className="mr-2 h-4 w-4" />
                Español
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FlagIcon className="mr-2 h-4 w-4" />
                Français
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FlagIcon className="mr-2 h-4 w-4" />
                Deutsch
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
            <Link
              aria-current="page"
              className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
              to="#"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
              to="#"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
              to="#"
            >
              Products
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
              to="#"
            >
              Contact
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
              to="#"
            >
              Login
            </Link>
            <Link
              className="text-sm font-medium transition-colors hover:text-gray-900 hover:bg-blue-300 dark:hover:text-gray-50 data-[active=true]:font-semibold data-[active=true]:text-[#00b300] dark:data-[active=true]:text-[#00b300]"
              to="#"
            >
              Sign Up
            </Link>
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2" size="icon" variant="outline">
                    <GlobeIcon className="h-4 w-4" />
                    <span className="sr-only">Language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FlagIcon className="mr-2 h-4 w-4" />
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FlagIcon className="mr-2 h-4 w-4" />
                    Español
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FlagIcon className="mr-2 h-4 w-4" />
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FlagIcon className="mr-2 h-4 w-4" />
                    Deutsch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
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
  )
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
  )
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
  )
}