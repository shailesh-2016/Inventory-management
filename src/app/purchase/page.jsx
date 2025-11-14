"use client";
import React from "react";
import OHeader from "./components/OHeader";
import PODetailsTables from "./components/Tables";
import MaterialsAndPayment from "./components/Tables2";

export default function POPageCombined() {
  return (
    <div className="max-w-[1400px] mx-auto p-6 -mt-8">
      <OHeader />
      <div className="bg-white rounded-lg border border-gray-200 mb-6 p-4 space-y-6">
        <PODetailsTables />
        <MaterialsAndPayment />
      </div>
    </div>
  );
}
