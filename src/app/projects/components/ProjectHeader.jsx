"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectHeader({
  projectName = "Project 1",
  projectLink = "/projects/tenders",
  tabs = [
    "Overview",
    "Allotted Vendors",
    "Inventory",
    "Material Requests",
    "Transfers Requests",
  ],
  activeTab = "Overview",
  onTabChange = (t) => {},
  onAddRoute = () => {},
  onAllotVendor = () => {},
}) {
  const router = useRouter(); 

  return (
    <div className="mb-6">
      {/* Top row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}   
            className="inline-flex items-center gap-2  hover:text-gray-800"
          >
            <Image
              src="/icons/arrow.svg"
              alt="Back"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </button>

          {/* Page title */}
          <h4 className="font-semibold text-lg">{projectName}</h4>
        </div>

        {/* Actions */}
        <div className="flex w-full sm:w-auto gap-3">
          <button
            onClick={onAllotVendor}
            className="flex-1 sm:flex-none px-4 py-1 rounded-full border border-(--color-brand-hover) text-(--color-brand-hover) hover:bg-gray-50 text-sm"
            title="Allot Vendor"
          >
            + Allot Vendor
          </button>

          <button
            onClick={onAddRoute}
            className="flex-1 sm:flex-none px-5 py-1.5 rounded-full bg-(--color-brand-hover) text-white text-sm shadow-sm hover:bg-emerald-600"
            title="Add Route"
          >
            + Add Route
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4">
        <nav className="flex items-center gap-4 text-sm  overflow-x-auto no-scrollbar pb-4">
          {tabs.map((t) => {
            const isActive = t === activeTab;
            return (
              <button
                key={t}
                onClick={() => onTabChange(t)}
                className={`shrink-0 px-5 py-1.5 -mb-px rounded-full transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-white text(--color-text)  border-2 border-(--color-border) font-medium"
                    : "hover:text-(--color-brand) "
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {t}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
