import { Link } from "react-router-dom";
import { useState } from "react";

import {
  ClipboardListIcon,
  GaugeIcon,
  XIcon,
  ClipboardCheckIcon,
  CarIcon,
  TruckIcon,
  CalendarIcon,
  TicketIcon,
  UserIcon,
  SettingsIcon
} from './icons';

interface SideBarProps {
  full_name: string;
}

function SideBar({ full_name }: SideBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
        <h2 className="mt-6 text-2xl font-semibold">Welcome, {full_name}</h2>
        <nav className="mt-8">
          <Link to="#" className="flex items-center mt-4 py-2 px-6 bg-[#0A2439] rounded-md">
            <GaugeIcon className="h-6 w-6" />
            <span className="ml-3">Dashboard</span>
          </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <ClipboardListIcon className="h-6 w-6" />
                <span className="ml-3">Register for License</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <ClipboardCheckIcon className="h-6 w-6" />
                <span className="ml-3">Exams</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <CarIcon className="h-6 w-6" />
                <span className="ml-3">Driving Schools</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <ClipboardListIcon className="h-6 w-6" />
                <span className="ml-3">Activity Log</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <TruckIcon className="h-6 w-6" />
                <span className="ml-3">Vehicle Management</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <CalendarIcon className="h-6 w-6" />
                <span className="ml-3">Appointments</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <TicketIcon className="h-6 w-6" />
                <span className="ml-3">Payments</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <UserIcon className="h-6 w-6" />
                <span className="ml-3">Referrals</span>
              </Link>
              <Link to="#" className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md">
                <SettingsIcon className="h-6 w-6" />
                <span className="ml-3">Settings</span>
              </Link>
            </nav>
          </div>
        </aside>
  )
}

export default SideBar