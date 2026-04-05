import React, { useState } from "react";
import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { HiMenu, HiX } from "react-icons/hi";
import { href, NavLink } from "react-router-dom";

const SidebarCompo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile Top Bar with Hamburger (Only ≤600px) */}
      <div className=" p-4 bg-white text-black md:hidden">
        <button onClick={() => setIsOpen(true)} className="text-2xl">
          <HiMenu />
        </button>
      </div>

      {/* 🔹 Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 🔹 Sidebar Wrapper */}
      <div
        className={`
          fixed md:static z-50
          top-0 left-0 h-full
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar
          className="h-screen w-64 border-r border-gray-200 shadow-sm overflow-y-auto bg-white"
        >
          {/* Close button (mobile only) */}
          <div className="flex justify-end p-3 md:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-600"
            >
              <HiX />
            </button>
          </div>

          <SidebarItems>
            <SidebarItemGroup className="space-y-2 p-4">

              {/* SETTINGS */}
              <SidebarCollapse
                label="Settings"
                className="text-gray-700 font-semibold hover:bg-pink-50 rounded-lg transition"
              >
                {[
                { label: "My Cycles", href: "" },
                { label: "My Weight", href: "" },
                { label: "Timeline", href: "" },
                { label: "Prediction Settings", href: "" },
                { label: "Theme", href:"" },
                { label: "History", href: "" },
                { label: "Upload", href: "/Profile/upload" },
                { label: "Profile", href: "/Profile/profiledata" },
                ].map((item, index) => (
                  <SidebarItem
                    key={index}
                    as={NavLink}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-700 rounded-md transition"
                  >
                    {item.label}
                  </SidebarItem>
                ))}
              </SidebarCollapse>

              {/* SELF CARE */}
              <SidebarCollapse
                label="Self Care"
                className="text-gray-700 font-semibold hover:bg-pink-50 rounded-lg transition"
              >
                {[
                  {label: "Cramps Relief Videos", href:"/Profile/CrampsVideo"},
                  {label: "Recommended Exercises",href:"/Profile/RecommendedExcercise"},
                  {label:"Diet Suggestion",href:""},
                  {label:"Soundscape",href:"/Profile/SoundscapeVideo"},
                ].map((item, index) => (
                  <SidebarItem
                    key={index}
                    as={NavLink}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-gray-600 hover:bg-pink-100 hover:text-pink-700 rounded-md transition"
                  >
                    {item.label}
                  </SidebarItem>
                ))}
              </SidebarCollapse>

              {/* ADD PERIOD BUTTON */}
              <SidebarItem
              as={NavLink}
              to="/Profile/add-period"
                className="mt-4 bg-pink-600 text-white text-center rounded-lg hover:bg-pink-700 transition font-medium"
              >
                Add Period
              </SidebarItem>

            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
};

export default SidebarCompo;