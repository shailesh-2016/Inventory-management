"use client";

import { useState } from "react";
import SidebarWithSubmenu from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const contentPaddingClass = collapsed ? "lg:pl-20" : "lg:pl-64";
  const rootOverflowClass = mobileOpen ? "overflow-hidden" : "";

  return (
    <div className={`min-h-screen flex  ${rootOverflowClass}`}>
      <SidebarWithSubmenu collapsed={collapsed} setCollapsed={setCollapsed} />

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed left-0 top-0 bottom-0 w-64 h-full bg-white p-1  ">
            <div className="mb-4 flex items-center justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close sidebar"
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <SidebarWithSubmenu
              forceMobile={true}
              collapsed={false}
              setCollapsed={() => {}}
            />
          </div>
        </div>
      )}

      <div
        className={`flex-1 min-w-0 transition-all duration-300 ${contentPaddingClass}`}
      >
        <Topbar
          onToggleSidebar={() => setMobileOpen((s) => !s)}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((c) => !c)}
        />

        <main className="p-6">
          <div className="w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
