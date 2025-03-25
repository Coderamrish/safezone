import React from 'react';
import { Shield, Award, Users, Lock } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About SafeZone Monitor
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Protecting communities through intelligent monitoring and prevention
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Advanced Protection
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    AI-powered detection system that monitors restricted zones 24/7 for mobile phone usage
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Proven Results
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Significant reduction in mobile phone-related incidents in monitored zones
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Lock className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Privacy First
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Advanced privacy protection measures ensuring user data security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Mission
          </h3>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              SafeZone Monitor is dedicated to enhancing public safety through innovative technology. 
              Our mission is to prevent accidents and incidents caused by mobile phone distractions 
              in critical areas such as railway tracks, busy roads, and other restricted zones. 
              We combine cutting-edge AI technology with user-friendly interfaces to create a 
              safer environment for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}