"use client";
import { useState } from "react";

export default function Topbar({ onToggleSidebar }) {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-(--color-border)">
      <div
        className="
          flex items-center justify-between
          h-14 sm:h-16       /* ⬅️ height change */
          px-3 sm:px-4      /* ⬅️ padding change */
        "
      >
        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-gray-100"
            aria-label="Open menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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

        {/* Right Section */}
        <div className="relative flex items-center gap-0.5 sm:gap-1">
          <button className="rounded-md hover:bg-gray-100 p-1 sm:p-1.5">
            <img
              src="/icons/bell.svg"
              alt="Notifications"
              className="w-5 h-5 sm:w-6 sm:h-6 "
            />
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenProfile((s) => !s)}
              className="flex items-center gap-1 sm:gap-2 py-1 px-2 sm:px-3 rounded-md hover:bg-gray-100"
            >
              <div
                className="
                  rounded-full border bg-[#FFCC00] flex items-center justify-center
                  w-7 h-7 text-xs
                  sm:w-8 sm:h-8 sm:text-sm
                "
              >
                YP
              </div>

              {/* Hide Arrow + Name on very small screens */}
              <svg
                className="w-3.5 h-3.5 text-gray-500 hidden sm:block"
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
              <div className="absolute right-0 mt-2 w-36 sm:w-40 bg-white border rounded-md shadow-sm py-2">
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
