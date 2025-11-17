"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const actionBtnBase =
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 rounded-full text-xs focus:outline-none";

export default function OHeader({
  title = "#PO0001",
  onBack = () => history?.back?.(),
  onCreateAmend = () => console.log("create amendment"),
  onGenerateGRN = () => console.log("generate grn"),
  onGenerateMRN = () => console.log("generate mrn"),
}) {
  const router = useRouter();
  const TIMELINE_ROUTE = "/purchase/list";

  return (
    <header className="-mx-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between py-2 sm:py-3">
        {/* LEFT: Back + title (mobile pe icons yahi honge) */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Back button */}
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

          {/* Title + mobile icons */}
          <div className="flex items-center gap-2 min-w-0">
            <div className="min-w-0">
              <div className="text-base sm:text-lg font-semibold truncate">
                {title}
              </div>
            </div>

            {/* 👇 MOBILE ONLY icons: title ke aage */}
            <div className="flex items-center gap-1 sm:hidden">
              <button
                type="button"
                title="Activity"
                onClick={() => router.push(TIMELINE_ROUTE)}
                aria-label="Open timeline"
                className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <img src="/icons/clock.svg" alt="" className="w-4 h-4" />
              </button>

              <button
                type="button"
                title="Print"
                className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <img src="/icons/icons.svg" alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: desktop/tablet pe icons + buttons */}
        <div className="flex items-center gap-2 justify-end">
          {/* 👇 DESKTOP/TABLET ONLY icons: buttons ke paas */}
          <div className="hidden sm:flex items-center gap-1 mr-1">
            <button
              type="button"
              title="Activity"
              onClick={() => router.push(TIMELINE_ROUTE)}
              aria-label="Open timeline"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <img src="/icons/clock.svg" alt="" className="w-4 h-4" />
            </button>

            <button
              type="button"
              title="Print"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <img src="/icons/icons.svg" alt="" className="w-4 h-4" />
            </button>
          </div>

          {/* Buttons - thode se small, ek row me */}
          <div className="flex items-center gap-0.5 flex-nowrap overflow-x-auto no-scrollbar mx-auto pb-4">
            <button
              onClick={onCreateAmend}
              className="px-2.5 py-1.5 text-[11px] rounded-2xl border border-(--color-brand) text-(--color-brand) hover:bg-(--color-brand)/5 shrink-0"
            >
              Create Amendment
            </button>

            <button
              onClick={onGenerateGRN}
              className="px-2.5 py-1.5 text-[11px] rounded-2xl border border-(--color-brand) text-(--color-brand) hover:bg-emerald-50 shrink-0"
            >
              Generate GRN
            </button>

            <button
              onClick={onGenerateMRN}
              className="px-2.5 py-1.5 text-[11px] rounded-2xl bg-(--color-brand) text-white hover:bg-emerald-700 shrink-0"
            >
              Generate MRN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
