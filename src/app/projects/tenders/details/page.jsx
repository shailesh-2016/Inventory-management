import React from "react";

import RouteDetails from "../../components/RouteDetailsPage";
import ProjectHeader from "../../components/ProjectHeader";

export default function DetailsPage({ searchParams }) {
  const routeId = searchParams?.routeId || null;

  return (
    <div className="max-w-7xl mx-auto p-4">
      
      <ProjectHeader
        projectName="Project 1"
        projectLink="/projects"
        activeTab="Overview"
      />

      <RouteDetails routeId={routeId} />

    </div>
  );
}
