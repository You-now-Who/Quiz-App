"use client";
import React from "react";
import { useAuthContext } from "@/_authModules/_authFunctions/AuthContext";
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/navigation'

function Navbar() {
  const router = useRouter()
  const user = useAuthContext()

  const handleLogout = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const auth = getAuth();
    await auth.signOut();
    return router.push("/auth/login");
  };

  return (
    <nav className="bg-gray-50 shadow-sm border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded-full" src="https://wallpapers.com/images/hd/cute-harry-potter-four-houses-0k7e5crs93sm4git.jpg" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-flame-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold"
                >
                  Place
                </a>
                <a
                  href="#"
                  className="text-flame-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold"
                >
                  Holder
                </a>
                <a
                  href="#"
                  className="text-flame-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold"
                  onClick={handleLogout}
                >
                  Log Out Duh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
