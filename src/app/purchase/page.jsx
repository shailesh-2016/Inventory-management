"use client";
import React from "react";
import OHeader from "./components/OHeader";
import PODetailsTables from "./components/Tables";
import MaterialsAndPayment from "./components/Tables2";

export default function POPageCombined() {
  return (

    <div className="mx-auto p-6 -mt-10"> 
      <OHeader />
      <div className="bg-white rounded-lg border border-(--color-border) mb-6 p-4 space-y-6 -mx-7">
        <PODetailsTables />
        <MaterialsAndPayment />
      </div>
    </div>
  );
}