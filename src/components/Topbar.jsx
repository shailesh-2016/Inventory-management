"use client";
import { useState } from "react";

export default function Topbar({ onToggleSidebar }) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white  border-b border-(--color-border)">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden sm:flex items-center gap-4">
            <h4 className="font-semibold">Projects</h4>
          </div>
        </div>

        {/* Right Section (Bell + Profile together) */}
        <div className="relative flex items-center">
          <button className="rounded-md hover:bg-gray-100 relative">
            <img
              src="/icons/bell.svg"
              alt="Notifications"
              className="w-6 h-6"
              width={20}
              height={20}
            />
          </button>

          {/* 👤 Profile dropdown */}
          <div>
            <button
              onClick={() => setOpenProfile((s) => !s)}
              className="flex items-center gap-2 p-1 px-3 rounded-md hover:bg-gray-100"
            >
              <div className="w-8 h-8 rounded-full border bg-[#FFCC00] flex items-center justify-center">
                YP
              </div>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openProfile && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-sm py-2">
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
