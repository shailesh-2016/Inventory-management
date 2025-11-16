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
        className={`${labelBg} text-sm font-medium px-3 py-2 border border-(--color-border)  w-44`}
      >
        {label}
      </td>
      <td className="text-xs font-medium  px-3 py-2 border border-(--color-border)">
        {value ?? "-"}
      </td>
    </tr>
  );
}

export default function POTimelinePage() {
  return (
    <div className="min-h-screen">
      {/* existing header (unchanged) */}
      <OHeader title="#PO0001" />

      {/* main container */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* outer white card that holds timeline rows */}
        <div className="bg-white border border-(--color-border) rounded-md overflow-hidden">
          <div className="p-4 space-y-6">
            {/* each timeline item: [date | center(dot+line) | content] */}
            {timelineData.map((t, idx) => (
              <div
                key={t.key}
                className="grid grid-cols-[120px_48px_1fr] gap-4 items-stretch"
              >
                {/* DATE column */}
                <div className="text-xs text-(--color-grey) flex items-start pt-1">
                  <div className="flex items-center gap-2">
                    <img
                      src="/icons/check.svg"
                      alt=""
                      className="w-4 h-4"
                      loading="lazy"
                    />
                    <div>{t.date}</div>
                  </div>
                </div>

                {/* CENTER column: dot + vertical line that stretches to match content height */}
                <div className="flex flex-col items-center">
                  {/* dot */}
                      <img src="/icons/dot.svg" className="w-4 h-4" loading="lazy" />
                  {/* line fills remaining height of this grid row */}
                <div className="w-px bg-(--color-brand) h-full" />

                </div>

                {/* CONTENT column */}
                <div>
                  <div className="mb-3 font-semibold text-sm">{t.title}</div>

                  {t.contentType === "booked" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-(--color-border)">
                          <table className="w-full border-collapse">
                            <tbody>
                              <LabelRow
                                label="PO Type"
                                value={t.header.poType}
                                labelBg="bg-[#FFF7E6]"
                              />
                              <LabelRow label="PO No." value={t.header.poNo} />
                              <LabelRow
                                label="Ref No."
                                value={t.header.refNo}
                              />
                            </tbody>
                          </table>
                        </div>

                        <div className="bg-white border border-(--color-border)">
                          <table className="w-full border-collapse">
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
                              <LabelRow label="Route" value={t.header.route} />
                            </tbody>
                          </table>
                        </div>

                        
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {/* FROM */}
                        <div className="bg-white border border-(--color-border)">
                          <div className="px-4 py-3 border-b border-(--color-border)">
                            <h4 className="text-sm font-semibold">From</h4>
                          </div>
                          <table className="w-full border-collapse">
                            <tbody>
                              <LabelRow
                                label="Vendor"
                                value={t.from.vendor}
                                labelBg="bg-[#F5FAFE]"
                              />
                              <LabelRow
                                label="Phone No."
                                value={<a className="text-blue-600">{t.from.phone}</a>}
                                labelBg="bg-[#F5FAFE]"
                              />
                              <LabelRow
                                label="Address"
                                value={t.from.address}
                                labelBg="bg-[#F5FAFE]"
                              />
                              <LabelRow label="State" value={t.from.state} labelBg="bg-[#F5FAFE]" />
                              <LabelRow
                                label="City"
                                value={t.from.city}
                                labelBg="bg-[#F5FAFE]"
                              />
                              <LabelRow label="Pincode" value={t.from.pincode} labelBg="bg-[#F5FAFE]" />
                              <LabelRow
                                label="GSTIN / UIN"
                                value={t.from.gst}
                                labelBg="bg-[#F5FAFE]"
                              />
                              <LabelRow label="PAN" value={t.from.pan} labelBg="bg-[#F5FAFE]" />
                            </tbody>
                          </table>
                        </div>

                        {/* TO */}
                        <div className="bg-white border border-(--color-border)">
                          <div className="px-4 py-3 border-b border-(--color-border)">
                            <h4 className="text-sm font-semibold">To</h4>
                          </div>
                          <table className="w-full border-collapse">
                            <tbody>
                              <LabelRow
                                label="Warehouse"
                                value={t.to.warehouse}
                                labelBg="bg-[#F5FAFE]"
                              />
                              <LabelRow label="Concern Person" value={t.to.person} labelBg="bg-[#F5FAFE]" />
                              <LabelRow
                                label="Phone No."
                                value={<a className="text-[--color-blue]">{t.to.phone}</a>}
                                labelBg="bg-[#F5FAFE]"
                              />
                              <LabelRow label="Address" value={t.to.address} labelBg="bg-[#F5FAFE]" />
                              <LabelRow label="State" value={t.to.state} labelBg="bg-[#F5FAFE]" />
                              <LabelRow label="City" value={t.to.city}  labelBg="bg-[#F5FAFE]"/>
                              <LabelRow label="Pincode" value={t.to.pincode} labelBg="bg-[#F5FAFE]" />
                              <LabelRow label="GSTIN / UIN" value={t.to.gst} labelBg="bg-[#F5FAFE]" />
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {t.contentType === "kv" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {t.fields.map((f, i) => (
                        <div key={i} className="bg-white border border-(--color-border)">
                          <table className="w-full border-collapse">
                            <tbody>
                              <LabelRow label={f.k} value={f.v} labelBg="bg-[#FFF7E6]" />
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
