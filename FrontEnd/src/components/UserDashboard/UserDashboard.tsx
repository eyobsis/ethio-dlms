/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VS9lSOWIUkb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import {Link} from "react-router-dom"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function UserDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="flex flex-col h-screen bg-gray-950 text-white mb-[600px]">
      <header className="flex items-center justify-between p-6 bg-[#0C2D48]">
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <BarcodeIcon className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0A2439] focus-visible:bg-[#0A2439]">
            <UserIcon className="h-6 w-6" />
            <span className="sr-only">User</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0A2439] focus-visible:bg-[#0A2439]">
            <CogIcon className="h-6 w-6" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#0A2439] focus-visible:bg-[#0A2439]">
            <BellIcon className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 rounded-md bg-white text-black hover:bg-white/80 focus-visible:bg-white/80"
          >
            Log Out
          </Button>
          <Select>
            <SelectTrigger className="px-4 py-2 bg-[#0A2439] rounded-md">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={`w-64 bg-[#0C2D48] transition-all duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="px-4 py-6">
            <div className="flex items-center justify-between">
              <img src="/placeholder.svg" alt="DLMS Logo" className="h-10" />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Welcome, HansiJK!</h2>
            <nav className="mt-8">
              <Link href="#" className="flex items-center mt-4 py-2 px-6 bg-[#0A2439] rounded-md" prefetch={false}>
                <GaugeIcon className="h-6 w-6" />
                <span className="ml-3">Dashboard</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <ClipboardListIcon className="h-6 w-6" />
                <span className="ml-3">Register for License</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <ClipboardCheckIcon className="h-6 w-6" />
                <span className="ml-3">Exams</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <CarIcon className="h-6 w-6" />
                <span className="ml-3">Driving Schools</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <ClipboardListIcon className="h-6 w-6" />
                <span className="ml-3">Activity Log</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <TruckIcon className="h-6 w-6" />
                <span className="ml-3">Vehicle Management</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <CalendarIcon className="h-6 w-6" />
                <span className="ml-3">Appointments</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <TicketIcon className="h-6 w-6" />
                <span className="ml-3">Payments</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <UserIcon className="h-6 w-6" />
                <span className="ml-3">Referrals</span>
              </Link>
              <Link
                href="#"
                className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md"
                prefetch={false}
              >
                <SettingsIcon className="h-6 w-6" />
                <span className="ml-3">Settings</span>
              </Link>
            </nav>
          </div>
        </aside>
        <div className="flex-1 overflow-auto">
          <main className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-blue-500 text-white">
                <CardHeader>
                  <CardTitle>Written Exam</CardTitle>
                </CardHeader>
                <CardContent>Your written exams aren't scheduled yet.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-teal-500 text-white">
                <CardHeader>
                  <CardTitle>Practical Exam</CardTitle>
                </CardHeader>
                <CardContent>Your practical exams aren't scheduled yet.</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-green-500 text-white">
                <CardHeader>
                  <CardTitle>Learner's Permit</CardTitle>
                </CardHeader>
                <CardContent>Once your learner's permit is ready you can click here to view it</CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Permit
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-[#0A2439] text-white">
                <CardHeader>
                  <CardTitle>Profile Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold">User ID</h3>
                      <p>40</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Full Name</h3>
                      <p>Hansi Karunarathna</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Username</h3>
                      <p>HansiJK</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Email</h3>
                      <p>hansijk07@gmail.com</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">NIC Number</h3>
                      <p>986534786V</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Contact Number</h3>
                      <p>0723456754</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Gender</h3>
                      <p>Female</p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Joined on</h3>
                      <p>2021-05-18 12:37:55</p>
                    </div>
                  </div>
                  <Link href="#" className="block mt-4 text-blue-400 hover:text-blue-300" prefetch={false}>
                    Click here to change password
                  </Link>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#0A2439] text-white">
                <CardHeader>
                  <CardTitle>Driving School Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>You still haven't enrolled to any driving school</p>
                  <Link href="#" className="block mt-4 text-blue-400 hover:text-blue-300" prefetch={false}>
                    CLICK HERE TO JOIN!
                  </Link>
                  <img src="/placeholder.svg" alt="L Plates" className="mt-4" />
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View Driving Schools
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#0A2439] text-white">
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Written Exam</h3>
                        <p className="text-sm text-gray-400">June 15, 2023</p>
                      </div>
                      <Button
                        variant="ghost"
                        className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80"
                      >
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Practical Exam</h3>
                        <p className="text-sm text-gray-400">July 1, 2023</p>
                      </div>
                      <Button
                        variant="ghost"
                        className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80"
                      >
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Driving School</h3>
                        <p className="text-sm text-gray-400">June 20, 2023</p>
                      </div>
                      <Button
                        variant="ghost"
                        className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View All Appointments
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-[#0A2439] text-white">
                <CardHeader>
                  <CardTitle>Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Learner's Permit</h3>
                        <p className="text-sm text-gray-400">Paid on May 18, 2021</p>
                      </div>
                      <Button
                        variant="ghost"
                        className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80"
                      >
                        View Receipt
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Written Exam</h3>
                        <p className="text-sm text-gray-400">Paid on June 1, 2023</p>
                      </div>
                      <Button
                        variant="ghost"
                        className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80"
                      >
                        View Receipt
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="bg-white text-black hover:bg-white/80 focus-visible:bg-white/80">
                    View All Payments
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function BarcodeIcon(props) {
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
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </svg>
  )
}


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CarIcon(props) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function ClipboardCheckIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  )
}


function ClipboardListIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}


function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TicketIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  )
}


function TruckIcon(props) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}