import React from "react";
import RouteDetails from "../../components/RouteDetailsPage";
import ProjectHeader from "../../components/ProjectHeader";

export default function DetailsPage({ searchParams }) {
  const routeId = searchParams?.routeId || null;

  return (
    <div className="w-full px-3 sm:px-4 lg:px-1 py-4 -mt-6">
      <ProjectHeader
        projectName="Project 1"
        projectLink="/projects"
        activeTab="Overview"
      />

      <div className="mt-2">
        <RouteDetails routeId={routeId} />
      </div>
    </div>
  );
}
