"use client";

import React from "react";
import OHeader from "../components/OHeader"; // adjust path if needed

const timelineData = [
  {
    key: "booked",
    date: "Oct 10, 2025",
    title: "PO Booked",
    contentType: "booked",
    header: {
      poType: "Service",
      poNo: "PO0001",
      refNo: "REF001",
      project: "Project 1_PR0001",
      circle: "Ahmedabad",
      route: "Ahmedabad - Sanand",
    },
    from: {
      vendor: "Yogendra Panchal",
      phone: "+91 9876543210",
      address: "Ganesh Glory 11",
      state: "Gujarat",
      city: "Ahmedabad",
      pincode: "382470",
      gst: "XXXX XXXX XXXX",
      pan: "XXXX XXXX XXXX",
    },
    to: {
      warehouse: "WABD001",
      person: "Saurabh Desai",
      phone: "+91 9876543210",
      address: "Ganesh Genesis",
      state: "Gujarat",
      city: "Ahmedabad",
      pincode: "382470",
      gst: "XXXX XXXX XXXX",
    },
  },
  {
    key: "approved",
    date: "Oct 10, 2025",
    title: "PO Approved",
    contentType: "kv",
    fields: [
      { k: "Approved By", v: "Saurabh Desai" },
      { k: "Approved Date", v: "10/10/2025" },
    ],
  },
  {
    key: "grn",
    date: "Oct 10, 2025",
    title: "GRN",
    contentType: "kv",
    fields: [
      { k: "GRN No.", v: "GRN0001" },
      { k: "GRN Date", v: "10/10/2025" },
    ],
  },
  {
    key: "mrn",
    date: "Oct 12, 2025",
    title: "MRN",
    contentType: "kv",
    fields: [
      { k: "MRN No", v: "MRN0001" },
      { k: "MRN Date", v: "12/10/2025" },
    ],
  },
];

function LabelRow({ label, value, labelBg = "bg-[#FFF7E6]" }) {
  return (
    <tr>
      <td
        className={`${labelBg} text-xs sm:text-sm font-medium px-2 sm:px-3 py-2 border border-(--color-border) w-32 sm:w-44 whitespace-nowrap`}
      >
        {label}
      </td>
      <td className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-2 border border-(--color-border)">
        {value ?? "-"}
      </td>
    </tr>
  );
}

export default function POTimelinePage() {
  return (
    <div className="min-h-screen mx-6 -mt-4 ">
      {/* Header as is */}
      <OHeader title="#PO0001" />

      {/* main container */}
      <div className="-mx-8 px-3 sm:px-4 lg:px-0 py-4 sm:py-6 -mt-4">
        {/* outer white card */}
        <div className="bg-white border border-(--color-border) rounded-md overflow-hidden">
          <div className="p-4 space-y-6">
            {timelineData.map((t, idx) => (
              <div
                key={t.key}
                className="
                  flex flex-col gap-3
                  md:grid md:grid-cols-[120px_48px_minmax(0,1fr)]
                  md:gap-4 md:items-stretch
                "
              >
                {/* DATE - mobile (top) */}
                <div className="flex md:hidden items-center gap-2 text-xs text-(--color-grey) mt-1">
                  <img
                    src="/icons/check.svg"
                    alt=""
                    className="w-4 h-4"
                    loading="lazy"
                  />
                  <span>{t.date}</span>
                </div>

                {/* DATE - desktop (left column) */}
                <div className="hidden md:flex text-xs text-(--color-grey) items-start pt-1">
                  <div className="flex items-center gap-2">
                    <img
                      src="/icons/check.svg"
                      alt=""
                      className="w-4 h-4"
                      loading="lazy"
                    />
                    <div className="whitespace-nowrap">{t.date}</div>
                  </div>
                </div>

                {/* CENTER column: dot + line (desktop only) */}
                <div className="hidden md:flex flex-col items-center">
                  {/* dot */}
                  <img
                    src="/icons/dot.svg"
                    className="w-4 h-4"
                    loading="lazy"
                    alt=""
                  />
                  {/* vertical line */}
                  <div className="w-px bg-(--color-brand) flex-1 mt-1 h-full" />
                </div>

                {/* CONTENT column */}
                <div>
                  {/* Title */}
                  <div className="mb-3 font-semibold text-sm sm:text-base">
                    {t.title}
                  </div>

                  {/* CONTENT: booked */}
                  {t.contentType === "booked" && (
                    <div className="space-y-4">
                      {/* top header tables */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        <div className="bg-white border border-(--color-border)">
                          <table className="w-full border-collapse table-auto">
                            <tbody>
                              <LabelRow
                                label="PO Type"
                                value={t.header.poType}
                                labelBg="bg-[#FFF7E6]"
                              />
                              <LabelRow
                                label="PO No."
                                value={t.header.poNo}
                              />
                              <LabelRow
                                label="Ref No."
                                value={t.header.refNo}
                              />
                            </tbody>
                          </table>
                        </div>

                        <div className="bg-white border border-(--color-border)">
                          <table className="w-full border-collapse table-auto">
                            <tbody>
                              <LabelRow
                                label="Project"
                                value={t.header.project}
                                labelBg="bg-[#FFF7E6]"
                              />
                              <LabelRow
                                label="Circle"
                                value={t.header.circle}
                              />
                              <LabelRow
                                label="Route"
                                value={t.header.route}
                              />
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* From / To tables */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-2">
                        {/* FROM */}
                        <div className="bg-white border border-(--color-border)">
                          <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-b border-(--color-border)">
                            <h4 className="text-sm sm:text-base font-semibold">
                              From
                            </h4>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse table-auto">
                              <tbody>
                                <LabelRow
                                  label="Vendor"
                                  value={t.from.vendor}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="Phone No."
                                  value={
                                    <a className="text-(--color-blue)">
                                      {t.from.phone}
                                    </a>
                                  }
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="Address"
                                  value={t.from.address}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="State"
                                  value={t.from.state}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="City"
                                  value={t.from.city}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="Pincode"
                                  value={t.from.pincode}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="GSTIN / UIN"
                                  value={t.from.gst}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="PAN"
                                  value={t.from.pan}
                                  labelBg="bg-[#F5FAFE]"
                                />
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* TO */}
                        <div className="bg-white border border-(--color-border)">
                          <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-b border-(--color-border)">
                            <h4 className="text-sm sm:text-base font-semibold">
                              To
                            </h4>
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse table-auto">
                              <tbody>
                                <LabelRow
                                  label="Warehouse"
                                  value={t.to.warehouse}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="Concern Person"
                                  value={t.to.person}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="Phone No."
                                  value={
                                    <a className="text-(--color-blue)">
                                      {t.to.phone}
                                    </a>
                                  }
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="Address"
                                  value={t.to.address}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="State"
                                  value={t.to.state}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="City"
                                  value={t.to.city}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="Pincode"
                                  value={t.to.pincode}
                                  labelBg="bg-[#F5FAFE]"
                                />
                                <LabelRow
                                  label="GSTIN / UIN"
                                  value={t.to.gst}
                                  labelBg="bg-[#F5FAFE]"
                                />
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CONTENT: simple key-value blocks */}
                  {t.contentType === "kv" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {t.fields.map((f, i) => (
                        <div
                          key={i}
                          className="bg-white border border-(--color-border)"
                        >
                          <table className="w-full border-collapse table-auto">
                            <tbody>
                              <LabelRow
                                label={f.k}
                                value={f.v}
                                labelBg="bg-[#FFF7E6]"
                              />
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
