"use client";
import React from "react";
import { useRouter } from "next/navigation";

/* ---------------------------
  BlockProgress (small blocks)
  --------------------------- */
function BlockProgress({
  value = 50,
  blocks = 10,
  blockClass = "w-4 h-3",
  filledClass = "bg-[var(--color-orange)]",
  emptyClass = "bg-[var(--color-empty)]",
  gapClass = "gap-1",
}) {
  const num = Number(value) || 0;
  const clamped = Math.max(0, Math.min(100, num));
  const filled = Math.floor((clamped / 100) * blocks);

  return (
    // aria-hidden visually, but provide sr-only text for screen readers
    <div className={`flex items-center ${gapClass}`} aria-hidden>
      {Array.from({ length: blocks }).map((_, i) => {
        const cls = `${i < filled ? filledClass : emptyClass} ${blockClass} rounded-sm`;
        return <span key={i} className={cls} />;
      })}
      <span className="sr-only">{clamped}%</span>
    </div>
  );
}

/* ---------------------------
  Mock data
  --------------------------- */
const TIMELINE = [
  {
    date: "Aug 25, 2025",
    title: "Trenching & Ducting",
    stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
  },
  {
    date: "Aug 26, 2025",
    title: "Trenching & Ducting",
    stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
  },
  {
    date: "Aug 27, 2025",
    title: "Trenching & Ducting",
    stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
  },
  {
    date: "Aug 28, 2025",
    title: "Trenching & Ducting",
    stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
  },
];

const MATERIALS = [
  {
    id: 1,
    name: "Material 1",
    code: "MR0001",
    category: "Category 1",
    sub: "Subcategory 1",
    hsn: "HSN0001",
    uom: "per pcs",
    qty: 20,
  },
  {
    id: 2,
    name: "Material 2",
    code: "MR0002",
    category: "Category 2",
    sub: "Subcategory 2",
    hsn: "HSN0002",
    uom: "per pcs",
    qty: 20,
  },
  {
    id: 3,
    name: "Material 3",
    code: "MR0003",
    category: "Category 3",
    sub: "Subcategory 3",
    hsn: "HSN0003",
    uom: "per pcs",
    qty: 20,
  },
];

const SERVICES = [
  {
    id: 1,
    name: "Service 1",
    code: "MA0003",
    category: "Category1",
    sub: "Subcategory1",
    uom: "per pcs",
    qty: 2,
  },
  {
    id: 2,
    name: "Service 2",
    code: "MA0003",
    category: "Category2",
    sub: "Subcategory2",
    uom: "per pcs",
    qty: 2,
  },
  {
    id: 3,
    name: "Service 3",
    code: "MA0003",
    category: "Category3",
    sub: "Subcategory3",
    uom: "per pcs",
    qty: 2,
  },
];

/* ---------------------------
  MAIN COMPONENT
  --------------------------- */
export default function RouteDetailsPage() {
  const router = useRouter();
  const route = {
    name: "Ahmedabad Sanand",
    overall: 50,
    scope: 200,
    state: "Gujarat",
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white border border-(--color-border) rounded-md overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-(--color-border) flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center gap-2"
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium text-sm">{route.name}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white border border-(--color-border) rounded px-3 py-1">
              <BlockProgress value={route.overall} blocks={10} blockClass="w-3 h-3" gapClass="gap-1" />
              <div className="text-sm font-medium ml-2" aria-hidden>
                {route.overall}
              </div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-4 space-y-4">
          {/* Timeline Section */}
          <div className="bg-white border border-(--color-border) rounded-md p-4">
            <div className="space-y-3">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {/* DATE */}
                  <div className="w-25 flex items-center gap-2 mt-1">
                    <img src="/icons/check.svg" alt="" aria-hidden="true" className="w-4 h-4" loading="lazy" />
                    <div className="text-xs text-(--color-grey)">{item.date}</div>
                  </div>

                  {/* LINE + ICON IN CENTER */}
                  <div className="w-6 flex flex-col items-center">
                    <div className="mt-1 flex items-center justify-center">
                      {/* replaceable icon */}
                      <img src="/icons/dot.svg" alt={`${item.title} status`} className="w-4 h-4" loading="lazy" />
                    </div>

                   <div className="w-px bg-(--color-brand) flex-1 mt-0.5" style={{ minHeight: 90 }} aria-hidden />

                  </div>

                  {/* RIGHT SIDE CONTENT (TITLE + BOXES) */}
                  <div className="flex-1">
                    <div className="mb-3 font-semibold">{item.title}</div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-0 items-start">
                      {[
                        { key: "td", label: "T & D" },
                        { key: "blowing", label: "Blowing" },
                        { key: "muff", label: "Muff" },
                        { key: "pole", label: "Pole" },
                        { key: "stringing", label: "Stringing" },
                      ].map((g) => {
                        const val = item.stats?.[g.key] ?? 0;

                        return (
                          <div key={g.key} className="border border-(--color-border) bg-white flex flex-col">
                            <div className="text-xs border-b border-(--color-border) mb-3 p-2 text-center font-medium bg-[#E5E5E5]">
                              {g.label}
                            </div>

                            <div className="px-2 pb-3">
                              <div className="flex items-center gap-2">
                                <div className="flex-1">
                                  <BlockProgress
                                    value={val}
                                    blocks={10}
                                    blockClass="w-3 h-5"
                                    gapClass="gap-1"
                                    filledClass="bg-[var(--color-orange)]"
                                    emptyClass="bg-[var(--color-empty)]"
                                  />
                                </div>
                                <div className="text-xs w-10 text-right" aria-label={`${g.label} progress`}>
                                  {val}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Table */}
          <div className="bg-white border border-(--color-border) rounded-md p-4">
            <div className="text-sm font-medium mb-2">Materials Details</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse" role="table" aria-label="Materials details table">
                <caption className="sr-only">Materials details</caption>
                <thead>
                  <tr className="text-xs bg-[#E5E5E5]">
                    <th className="py-2 px-3 border border-(--color-border)">#</th>
                    <th className="py-2 px-3 border border-(--color-border)">Material Name</th>
                    <th className="py-2 px-3 border border-(--color-border)">Material Code</th>
                    <th className="py-2 px-3 border border-(--color-border)">Category</th>
                    <th className="py-2 px-3 border border-(--color-border)">Subcategory</th>
                    <th className="py-2 px-3 border border-(--color-border)">HSN/SAC</th>
                    <th className="py-2 px-3 border border-(--color-border)">UOM</th>
                    <th className="py-2 px-3 border border-(--color-border)">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {MATERIALS.map((m, i) => (
                    <tr key={m.id}>
                      <td className="py-2 px-3  border border-(--color-border)">{i + 1}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{m.name}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{m.code}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{m.category}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{m.sub}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{m.hsn}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{m.uom}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{m.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Services Table */}
          <div className="bg-white border border-(--color-border) rounded-md p-4">
            <div className="text-sm font-medium mb-2">Service Details</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse" role="table" aria-label="Service details table">
                <caption className="sr-only">Service details</caption>
                <thead>
                  <tr className="bg-[#E5E5E5] text-xs">
                    <th className="py-2 px-3 border border-(--color-border)">#</th>
                    <th className="py-2 px-3 border border-(--color-border)">Service Name</th>
                    <th className="py-2 px-3 border border-(--color-border)">Service Code</th>
                    <th className="py-2 px-3 border border-(--color-border)">Category</th>
                    <th className="py-2 px-3 border border-(--color-border)">Subcategory</th>
                    <th className="py-2 px-3 border border-(--color-border)">UOM</th>
                    <th className="py-2 px-3 border border-(--color-border)">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s, i) => (
                    <tr key={s.id}>
                      <td className="py-2 px-3 border border-(--color-border)">{i + 1}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{s.name}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{s.code}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{s.category}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{s.sub}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{s.uom}</td>
                      <td className="py-2 px-3 border border-(--color-border)">{s.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
