"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * MaterialsAndPayment
 * Renders the materials table + payment info + payment summary.
 * - layout base responsive
 * - colors same
 */
export default function MaterialsAndPayment({

  
  materials = [
    {
      id: 1,
      name: "Material 1",
      code: "MR0001",
      category: "Category 1",
      sub: "Subcategory 1",
      hsn: "HSN0001",
      uom: "mtr",
      qty: 0,
      unitRate: 0.0,
    },
    {
      id: 2,
      name: "Material 2",
      code: "MR0002",
      category: "Category 1",
      sub: "Subcategory 1",
      hsn: "HSN0001",
      uom: "mtr",
      qty: 0,
      unitRate: 0.0,
    },
    {
      id: 3,
      name: "Material 3",
      code: "MR0003",
      category: "Category 1",
      sub: "Subcategory 1",
      hsn: "HSN0001",
      uom: "mtr",
      qty: 0,
      unitRate: 0.0,
    },
  ],
  payments = [
    {
      id: 1,
      date: "21st, Mar 2025",
      txnId: "pay_O9NAd1JLyOFTrY",
      amount: 0.0,
      mode: "Advanced",
      status: "Pending",
      details: { vpa: "subhankarsahaofficial8638@oksbi" },
    },
  ],
  summary = { basic: 0.0, sgst: 0.0, cgst: 0.0, igst: 0.0, total: 0.0 },
}) {
  const [expandedPayment, setExpandedPayment] = useState(null);

  // ---- common class snippets ----
  const boxBase = "bg-white border border-(--color-border) rounded-md";
  const tableBase = "min-w-full text-xs sm:text-sm border-collapse text-center";
  const thBase =
    "py-2 px-2 sm:px-3 text-[11px] sm:text-sm font-medium border border-(--color-border)";
  const thRight =
    "py-2 px-2 sm:px-3 text-right text-[11px] sm:text-xs border border-(--color-border)";
  const tdBase =
    "py-2 px-2 sm:px-3 text-xs sm:text-sm border border-(--color-border)";
  const sectionHeader =
    "px-3 sm:px-4 py-2.5 sm:py-3 border-b border-(--color-border)";
  const smallBadge =
    "inline-flex px-2 py-1 text-xs font-medium  text-[#FFA600] rounded";

    const router = useRouter();

  return (
    <div className="space-y-6">
      {/* ===== Materials table ===== */}
      <div className={boxBase}>
        <div className={sectionHeader}>
          <h3 className="font-semibold text-sm sm:text-base">Materials</h3>
        </div>

        <div className="overflow-x-auto">
          <table className={tableBase}>
            <thead className="bg-[#E5E5E5]">
              <tr>
                <th className={`${thBase} w-9`}>#</th>
                <th className={thBase}>Material Name</th>
                <th className={thBase}>Material Code</th>
                <th className={thBase}>Material Category</th>
                <th className={thBase}>Material Subcategory</th>
                <th className={thBase}>HSN/SAC Code</th>
                <th className={`${thBase} w-20`}>UOM</th>
                <th className={`${thRight} w-20`}>Qty</th>
                <th className={`${thRight} w-28`}>Unit Rate</th>
                <th className={`${thRight} w-28`}>Basic Amount</th>
              </tr>
            </thead>

            <tbody>
              {materials.map((m, idx) => {
                const basic = (m.qty || 0) * (m.unitRate || 0);
                return (
                  <tr key={m.id} className="hover:bg-gray-50">
                    <td className={tdBase}>{idx + 1}</td>
                    <td className={tdBase}>{m.name}</td>
                    <td className={tdBase}>{m.code}</td>
                    <td className={tdBase}>{m.category}</td>
                    <td className={tdBase}>{m.sub}</td>
                    <td className={tdBase}>{m.hsn}</td>
                    <td className={tdBase}>{m.uom}</td>
                    <td className={`${tdBase} text-right`}>{m.qty}</td>
                    <td className={`${tdBase} text-right`}>
                      {(m.unitRate || 0).toFixed(2)}
                    </td>
                    <td className={`${tdBase} text-right`}>
                      {basic.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Payment area: left table + right summary ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* left - payments table (spans 2 cols on lg) */}
        <div className={`${boxBase} lg:col-span-2`}>
          <div className={sectionHeader}>
            <h3 className="font-semibold text-sm sm:text-base">
              Payment Info.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className={tableBase}>
              <thead className="bg-[#E5E5E5]">
                <tr>
                  <th className={`${tdBase} w-10`} />
                  <th className={thBase}>#</th>
                  <th className={thBase}>Date</th>
                  <th className={thBase}>Transaction Id</th>
                  <th className={thRight}>Amount</th>
                  <th className={thBase}>Payment Mode</th>
                  <th className={thBase}>Order Status</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((p) => (
                  <React.Fragment key={p.id}>
                    <tr className="hover:bg-gray-50">
                      <td className={tdBase}>
                        <button
                          onClick={() =>
                            setExpandedPayment((cur) =>
                              cur === p.id ? null : p.id
                            )
                          }
                          className="text-gray-500 hover:text-gray-700 flex items-center"
                          aria-expanded={expandedPayment === p.id}
                          aria-controls={`payment-details-${p.id}`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedPayment === p.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </td>

                      <td className={tdBase}>{p.id}</td>
                      <td className={tdBase}>{p.date}</td>
                      <td className={tdBase}>{p.txnId}</td>
                      <td className={`${tdBase} text-right`}>
                        ₹ {p.amount.toFixed(2)}
                      </td>
                      <td className={tdBase}>{p.mode}</td>
                      <td className={tdBase}>
                        <span className={smallBadge}>{p.status}</span>
                      </td>
                    </tr>

                    {expandedPayment === p.id && (
                      <tr id={`payment-details-${p.id}`} className="bg-white">
                        <td colSpan={7} className={`${tdBase} py-3 px-4`}>
                       <div className="border border-(--color-border) p-3">
                           <div className="text-sm font-medium mb-2 flex items-start border-b p-2 border-(--color-border)">
                            More Details
                          </div>
                          <div className=" flex items-start ml-2 ">
                            <div className="mb-2">
                              <strong>VPA</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; {p.details?.vpa}
                            </div>
                          </div>
                       </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* right - payment summary TABLE */}
        <div className={boxBase}>
          <div className={sectionHeader}>
            <h3 className="font-semibold text-sm sm:text-base">
              Payment Info.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full font-medium text-sm sm:text-sm border-collapse">
              <tbody>
                <tr>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-xs sm:text-sm bg-[#F5FAFE]">
                    Basic Amount
                  </td>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-right font-medium">
                    ₹ {summary.basic.toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-xs sm:text-sm bg-[#F5FAFE]">
                    SGST (6%)
                  </td>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-right font-medium">
                    ₹ {summary.sgst.toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-xs sm:text-sm bg-[#F5FAFE]">
                    CGST (6%)
                  </td>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-right font-medium">
                    ₹ {summary.cgst.toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-xs sm:text-sm bg-[#F5FAFE]">
                    IGST (12%)
                  </td>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-right font-medium">
                    ₹ {summary.igst.toFixed(2)}
                  </td>
                </tr>

                {/* Total Row (highlighted) */}
                <tr>
                  <td className="bg-[#FFF7E6] px-2 sm:px-3 py-2 border border-(--color-border) font-semibold">
                    Total
                  </td>
                  <td className="px-2 sm:px-3 py-2 border border-(--color-border) text-right font-semibold">
                    ₹ {summary.total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     <div className="flex justify-end">
  <button
    onClick={() => router.back()}
    className="px-4 py-1 rounded-2xl text-sm font-medium text-[#FF3B30] border border-[#FF3B30] hover:opacity-90 transition"
  >
    Close PO
  </button>
</div>
    </div>
  );
}
