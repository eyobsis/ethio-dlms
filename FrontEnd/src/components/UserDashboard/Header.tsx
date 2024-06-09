import React from 'react'

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import { BarcodeIcon } from './icons'
import { UserIcon } from './icons'
import { CogIcon } from './icons'
import { BellIcon } from './icons'


function Header() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
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
              <SelectItem value="am">Amharic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
  )
}

export default Header