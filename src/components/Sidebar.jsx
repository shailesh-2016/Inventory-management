"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Icon = ({ name, className = "w-5 h-5 transition-all duration-200" }) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
      className={className}
      loading="lazy"
      width={20}
      height={20}
      draggable="false"
    />
  );
};

export default function Sidebar({
  collapsed = false,
  setCollapsed = () => {},
  forceMobile = false,
}) {
  const [openKeys, setOpenKeys] = useState({});

  const nav = [
    { label: "Dashboard", href: "/", icon: "dashboard" },
    {
      label: "Project",
      href: "/projects",
      icon: "project",
      hasSub: true,
      children: [
        { label: "Tenders", href: "/projects/tenders" },
        { label: "Scope Category", href: "/projects/scope-category" },
        { label: "Scope Sub Category", href: "/projects/scope-sub-category" },
      ],
    },
    {
      label: "Vendor",
      href: "/vendor",
      icon: "vendor",
      hasSub: true,
      children: [
        { label: "All Vendors", href: "/vendor/all" },
        { label: "Add Vendor", href: "/vendor/add" },
      ],
    },
    { label: "Purchase Order", href: "/purchase", icon: "purchase" },
    {
      label: "Inventory",
      href: "/inventory",
      icon: "inventory",
      hasSub: true,
      children: [
        { label: "Stock", href: "/inventory/stock" },
        { label: "Material Requests", href: "/inventory/requests" },
      ],
    },
    {
      label: "Shipment Status",
      href: "/shipment",
      icon: "shipment",
      hasSub: true,
      children: [{ label: "Track", href: "/shipment/track" }],
    },
    { label: "Users", href: "/users", icon: "users" },
    {
      label: "Master",
      href: "/master",
      icon: "master",
      hasSub: true,
      children: [{ label: "Categories", href: "/master/categories" }],
    },
  ];

  const toggle = (href) => {
    setOpenKeys((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  const sidebarWidthClass = collapsed ? "lg:w-20" : "lg:w-64";

  const responsiveRootClass = forceMobile
    ? "flex flex-col lg:fixed lg:inset-y-0"
    : "hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0";

  return (
    <aside
      className={`${responsiveRootClass} bg-white border-r border-(--color-border) shadow transition-all duration-300 ${sidebarWidthClass}`}
    >
      {/* Header */}
      <div
        className={`flex h-16 items-center px-3 border-b border-(--color-border) ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Image
            src="/logo.png"
            alt="Beckhaul Logo"
            width={56}
            height={56}
            className="object-contain"
          />
          {!collapsed && (
            <div>
              <div className="text-sm font-semibold">Beckhaul Digital</div>
              <div className="text-xs font-semibold">Inventory Management</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 px-1 py-4 overflow-y-auto"
        aria-label="Sidebar navigation"
      >
        {nav.map((item) => {
          const isOpen = !!openKeys[item.href];

          if (!item.hasSub) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`icon-green-hover group flex items-center gap-3 px-3 py-2 rounded-md font-regular hover:bg-gray-50 transition-all duration-300 ${
                  collapsed ? "justify-center" : ""
                }`}
                title={item.label}
              >
                <span className="shrink-0 transition-all duration-300">
                  <Icon name={item.icon} />
                </span>

                {!collapsed && (
                  <span className="flex-1 group-hover:text-(--color-brand) font-regular transition-colors">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          }

          return (
            <div key={item.href} className="mb-1">
              <button
                type="button"
                onClick={() => toggle(item.href)}
                className={`icon-green-hover group w-full flex items-center gap-3 px-3 py-2 rounded-md font-regular hover:bg-gray-50 transition-all duration-300 ${
                  collapsed ? "justify-center" : ""
                }`}
                aria-expanded={isOpen}
                aria-controls={`${item.href}-submenu`}
                title={item.label}
              >
                <span className="shrink-0 transition-all duration-300">
                  <Icon name={item.icon} />
                </span>

                {!collapsed && (
                  <>
                    <span className="flex-1 text-left group-hover:text-(--color-brand) transition-colors">
                      {item.label}
                    </span>

                    <svg
                      className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* Submenu */}
              {!collapsed && (
                <div
                  id={`${item.href}-submenu`}
                  className={`overflow-hidden transition-[max-height] duration-300 ${
                    isOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="pl-9 pr-3 py-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="group flex items-center gap-3 px-3 py-2 rounded-md font-regular text-[#4D4D4D] hover:bg-gray-50 transition-all duration-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-(--color-brand)" />
                        <span className="flex-1 text-gray-600 group-hover:text-(--color-brand)">
                          {c.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
