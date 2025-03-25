import React from 'react';
import { Users, Map, AlertTriangle, Settings, Activity } from 'lucide-react';

export function AdminPanel() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Management */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold ml-2">User Management</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage user accounts and permissions</p>
            <button className="text-indigo-600 hover:text-indigo-500 font-medium">
              View Users →
            </button>
          </div>

          {/* Zone Configuration */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <Map className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold ml-2">Zone Configuration</h2>
            </div>
            <p className="text-gray-600 mb-4">Configure restricted zones and boundaries</p>
            <button className="text-indigo-600 hover:text-indigo-500 font-medium">
              Manage Zones →
            </button>
          </div>

          {/* Violation Reports */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold ml-2">Violation Reports</h2>
            </div>
            <p className="text-gray-600 mb-4">View and manage violation reports</p>
            <button className="text-indigo-600 hover:text-indigo-500 font-medium">
              View Reports →
            </button>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold ml-2">System Settings</h2>
            </div>
            <p className="text-gray-600 mb-4">Configure system parameters and settings</p>
            <button className="text-indigo-600 hover:text-indigo-500 font-medium">
              Configure →
            </button>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-indigo-600" />
              <h2 className="text-xl font-semibold ml-2">Analytics</h2>
            </div>
            <p className="text-gray-600 mb-4">View system analytics and statistics</p>
            <button className="text-indigo-600 hover:text-indigo-500 font-medium">
              View Analytics →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}