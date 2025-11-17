"use client";
import React from "react";

/**
 * PODetailsTables - cleaned version
 * - common classes extracted
 * - no visual changes to colors (kept your color vars intact)
 */
export default function PODetailsTables({
  header = {
    project: "Project 1_PR0001",
    circle: "Ahmedabad",
    route: "Ahmedabad - Sanand",
    poType: "Service",
    poNo: "PO0001",
    refNo: "REF001",
    dispatchMode: "By Road",
    warranty: "1 year",
    approvedDate: "15/10/2025",
    terms: "30 days due net",
    fromDate: "10/10/2025",
    toDate: "-",
  },
  from = {
    vendor: "Yogendra Panchal",
    phone: "+91 9876543210",
    address: "Ganesh Glory 11",
    state: "Gujarat",
    city: "Ahmedabad",
    pincode: "382470",
    gst: "XXXX XXXX XXXX",
    pan: "XXXX XXXX XXXX",
  },
  to = {
    warehouse: "WABD001",
    person: "Saurabh Desai",
    phone: "+91 9876543210",
    address: "Ganesh Genesis",
    state: "Gujarat",
    city: "Ahmedabad",
    pincode: "382470",
    gst: "XXXX XXXX XXXX",
  },
}) {
  // ---- common class snippets ----
  const boxBase = "bg-white rounded border border-(--color-border) overflow-hidden";
  const tableBase = "w-full table-fixed";
  const labelCellBase = "text-sm font-medium px-3 py-2 border border-(--color-border)";
  const valueCellBase = "text-xs px-3 py-2 border border-(--color-border)";
  const sectionHeader = "px-4 py-3 border-b border-(--color-border)";

  // small helper to render a labeled row (label cell + value cell)
  const Row = ({ label, value, labelBg = "bg-[#FFF7E6]" }) => (
    <tr>
      <td className={`${labelCellBase} ${labelBg} w-44`}>{label}</td>
      <td className={valueCellBase}>{value ?? "-"}</td>
    </tr>
  );

  return (
    <div className="space-y-6 ">
      {/* Top header: 3 small boxes in one row (stack on small) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box 1 */}
        <div className={boxBase}>
          <table className={tableBase}>
            <tbody>
              <Row label="Project" value={header.project} />
              <Row label="Circle" value={header.circle}/>
              <Row label="Route" value={header.route}/>
              <Row label="PO Type" value={header.poType}/>
            </tbody>
          </table>
        </div>

        {/* Box 2 */}
        <div className={boxBase}>
          <table className={tableBase}>
            <tbody>
              <Row label="PO No." value={header.poNo} />
              <Row label="Ref No." value={header.refNo}/>
              <Row label="Dispatch Mode" value={header.dispatchMode}/>
              <Row label="Warranty" value={header.warranty}/>
            </tbody>
          </table>
        </div>

        {/* Box 3 */}
        <div className={boxBase}>
          <table className={tableBase}>
            <tbody>
              <Row label="Approved Date" value={header.approvedDate}/>
              <Row label="Terms of Payment" value={header.terms}/>
              <Row label="From Date" value={header.fromDate}/>
              <Row label="To Date" value={header.toDate}/>
            </tbody>
          </table>
        </div>
      </div>

      {/* From / To side-by-side (stack on small) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* FROM */}
        <div className={boxBase}>
          <div className={sectionHeader}>
            <h3 className="font-semibold">From</h3>
          </div>

          <div className="p-0">
            <table className="w-full border-collapse">
              <tbody>
                <Row label="Vendor" value={from.vendor} labelBg="bg-[#F5FAFE]" />
                <Row label="Phone No." value={<a className="text-(--color-blue)">{from.phone}</a>} labelBg="bg-[#F5FAFE]" />
                <Row label="Address" value={from.address} labelBg="bg-[#F5FAFE]" />
                <Row label="State" value={from.state} labelBg="bg-[#F5FAFE]" />
                <Row label="City" value={from.city} labelBg="bg-[#F5FAFE]" />
                <Row label="Pincode" value={from.pincode} labelBg="bg-[#F5FAFE]" />
                <Row label="GSTIN / UIN" value={from.gst} labelBg="bg-[#F5FAFE]" />
                <Row label="PAN" value={from.pan} labelBg="bg-[#F5FAFE]" />
              </tbody>
            </table>
          </div>
        </div>

        {/* TO */}
        <div className={boxBase}>
          <div className={sectionHeader}>
            <h3 className="font-semibold">To</h3>
          </div>

          <div className="p-0">
            <table className="w-full border-collapse">
              <tbody>
                <Row label="Warehouse" value={to.warehouse} labelBg="bg-[#F5FAFE]" />
                <Row label="Concern Person" value={to.person} labelBg="bg-[#F5FAFE]" />
                <Row label="Phone No." value={<a className="text-(--color-blue)">{to.phone}</a>} labelBg="bg-[#F5FAFE]" />
                <Row label="Address" value={to.address} labelBg="bg-[#F5FAFE]" />
                <Row label="State" value={to.state} labelBg="bg-[#F5FAFE]" />
                <Row label="City" value={to.city} labelBg="bg-[#F5FAFE]" />
                <Row label="Pincode" value={to.pincode} labelBg="bg-[#F5FAFE]" />
                <Row label="GSTIN / UIN" value={to.gst} labelBg="bg-[#F5FAFE]" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
