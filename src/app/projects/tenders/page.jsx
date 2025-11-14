"use client";
import React, { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
import ProjectTopCard from "../components/ProjectTopCard";
import RoutesBlock from "../components/RoutesBlock";

export default function Page({ params }) {
  const id = params?.id ?? "1";

  const project = {
    id,
    name: "Project 1",
    head: "Sooraj Valand",
    email: "zh@gmail.com",
    phone: "+91 9876543210",
    scope: "600 km",
    company: {
      name: "Simploona",
      address: "Ganesh Glory 11",
      state: "Gujarat",
      city: "Ahmedabad",
      pincode: "382470",
    },
    docs: [1, 2, 3],
    stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
    routes: [
      {
        id: 1,
        state: "Gujarat",
        route: "Ahmedabad - Sanand",
        scope: 200,
        stats: { td: 60, blowing: 50, muff: 50, pole: 50, stringing: 50 },
      },
      {
        id: 2,
        state: "Gujarat",
        route: "Sanand - Morbi",
        scope: 200,
        stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
      },
      {
        id: 3,
        state: "Maharashtra",
        route: "Pune - Mumbai",
        scope: 300,
        stats: { td: 50, blowing: 50, muff: 50, pole: 50, stringing: 50 },
      },
    ],
  };

  const [progressValue, setProgressValue] = useState(50);
  const [activeTab, setActiveTab] = useState("Overview");

  const handleAllotVendor = () => alert("Allot Vendor clicked");
  const handleAddRoute = () => alert("Add Route clicked");
  const handleTabChange = (t) => setActiveTab(t);

  return (
    <div className="w-full">
      {/* Header - ultra minimal padding */}
      <div className="px-1 md:px-2">
        <ProjectHeader
          projectName={project.name}
          projectLink="/projects"
          tabs={[
            "Overview",
            "Allotted Vendors",
            "Inventory",
            "Material Requests",
            "Transfers Requests",
          ]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onAllotVendor={handleAllotVendor}
          onAddRoute={handleAddRoute}
        />

        
      </div>

      {/* Project Top Card */}
      <div className="px-1 md:px-2">
        <ProjectTopCard project={project} progress={progressValue} />
      </div>

      {/* RoutesBlock */}
      <div className="mt-8 mb-2 px-1 md:px-2">
        <RoutesBlock rows={project.routes} initialState="Gujarat" />
      </div>
    </div>
  );
}
