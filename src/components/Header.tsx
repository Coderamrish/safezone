import React from 'react';
import { Menu, Bell, User as UserIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Menu className="h-6 w-6 cursor-pointer" />
            <span className="ml-4 text-xl font-semibold">SafeZone Monitor</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 cursor-pointer" />
            <UserIcon className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}