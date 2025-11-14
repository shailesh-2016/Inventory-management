"use client";

import React from "react";
import { ChevronLeft, Clock, Printer } from "lucide-react";
import Image from "next/image";

// 🔹 Common utility classes (DRY)
const iconBtn =
  "hidden sm:inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900";
const actionBtnBase =
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 rounded-full text-xs focus:outline-none";

export default function OHeader({
  title = "#PO0001",
  onBack = () => history?.back?.(),
  onCreateAmend = () => console.log("create amendment"),
  onGenerateGRN = () => console.log("generate grn"),
  onGenerateMRN = () => console.log("generate mrn"),
}) {
  return (
    <header className=" border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-4 min-w-0">
            <button
              onClick={onBack}
              aria-label="Go back"
              className="p-1 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
             <Image
                          src="/icons/arrow.svg"
                          alt="Back"
                          width={20}
                          height={20}
                          className="cursor-pointer"
                        />
            </button>

            <div className="min-w-0">
              <div className="text-lg sm:text-xl font-semibold truncate">
                {title}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-1">
            {/* Icons */}
            <div className="flex items-center">
              <button type="button" title="Activity" className={iconBtn}>
                <img
                  src="/icons/clock.svg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </button>

              <button type="button" title="Print" className={iconBtn}>
                <img
                  src="/icons/icons.svg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 items-center overflow-x-auto no-scrollbar">
              <button
                onClick={onCreateAmend}
                className={`${actionBtnBase} border border-(--color-brand) text-(--color-brand) hover:bg-(--color-brand)/5`}
              >
                Create Amendment
              </button>

              <button
                onClick={onGenerateGRN}
                className={`${actionBtnBase} border border-(--color-brand) text-(--color-brand) hover:bg-emerald-50`}
              >
                Generate GRN
              </button>

              <button
                onClick={onGenerateMRN}
                className={`${actionBtnBase} bg-(--color-brand) text-white hover:bg-emerald-700`}
              >
                Generate MRN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
