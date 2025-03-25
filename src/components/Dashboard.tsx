import React from 'react';
import { MapPin, AlertTriangle, CreditCard, Users } from 'lucide-react';

const stats = [
  { name: 'Active Zones', value: '24', icon: MapPin },
  { name: 'Today\'s Violations', value: '156', icon: AlertTriangle },
  { name: 'Fines Collected', value: '₹45,670', icon: CreditCard },
  { name: 'Total Users', value: '1,204', icon: Users },
];

export function Dashboard() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.name}
                className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Live Feed</h3>
            <div className="mt-4 aspect-video bg-gray-100 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1000"
                alt="CCTV Feed"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Violations</h3>
            <div className="mt-4 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Mobile Phone Usage Detected
                    </p>
                    <p className="text-sm text-gray-500">
                      Zone: Railway Track {i} • {i * 5} minutes ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}