// src/components/SideBar.tsx
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
  onSelect: (component: string) => void;
}

function SideBar({ full_name, onSelect }: SideBarProps) {
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
          <button onClick={() => onSelect('Dashboard')} className="flex items-center mt-4 py-2 px-6 bg-[#0A2439] rounded-md w-full text-left">
            <GaugeIcon className="h-6 w-6" />
            <span className="ml-3">Dashboard</span>
          </button>
          <button onClick={() => onSelect('RegisterForNewLicense')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <ClipboardListIcon className="h-6 w-6" />
            <span className="ml-3">Register for License</span>
          </button>
          <button onClick={() => onSelect('RenewLicense')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <ClipboardListIcon className="h-6 w-6" />
            <span className="ml-3">Renew License</span>
          </button>
          <button onClick={() => onSelect('Exams')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <ClipboardCheckIcon className="h-6 w-6" />
            <span className="ml-3">Exams</span>
          </button>
          <button onClick={() => onSelect('DrivingSchools')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <CarIcon className="h-6 w-6" />
            <span className="ml-3">Driving Schools</span>
          </button>
          <button onClick={() => onSelect('ActivityLog')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <ClipboardListIcon className="h-6 w-6" />
            <span className="ml-3">Activity Log</span>
          </button>
          <button onClick={() => onSelect('Appointments')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <CalendarIcon className="h-6 w-6" />
            <span className="ml-3">Appointments</span>
          </button>
          <button onClick={() => onSelect('Payments')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <TicketIcon className="h-6 w-6" />
            <span className="ml-3">Payments</span>
          </button>
          <button onClick={() => onSelect('Settings')} className="flex items-center mt-4 py-2 px-6 hover:bg-[#0A2439] rounded-md w-full text-left">
            <SettingsIcon className="h-6 w-6" />
            <span className="ml-3">Settings</span>
          </button>
        </nav>
      </div>
    </aside>
  )
}

export default SideBar;
