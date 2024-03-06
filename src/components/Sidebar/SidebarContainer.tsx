"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import the Link component
import Sidebar, { SidebarItem } from "./Sidebar";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";

const SidebarContainer = () => {
  const [activeItem, setActiveItem] = useState("患者一覧");

  // Define the paths for each sidebar item
  const sidebarItems = [
    {
      name: "患者一覧",
      path: "/dashboard/patients",
      icon: <FaUsers size={30} />,
      alert: false,
    },
    {
      name: "フォルダ",
      path: "/dashboard/folders",
      icon: <FaFolderOpen size={30} />,
      alert: false,
    },
    {
      name: "画像解析",
      path: "/dashboard/analytics",
      icon: <MdAnalytics size={30} />,
      alert: false,
    },
    {
      name: "設定",
      path: "/dashboard/settings",
      icon: <CiSettings size={30} />,
      alert: false,
    },
    {
      name: "ヘルプ",
      path: "/dashboard/help",
      icon: <IoMdHelpCircle size={30} />,
      alert: true,
    },
  ];

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <Sidebar>
        {sidebarItems.map((item) => (
          <Link href={item.path} key={item.name}>
            <SidebarItem
              icon={item.icon}
              text={item.name}
              active={activeItem === item.name}
              alert={item.alert}
              onClick={() => handleItemClick(item.name)}
            />
          </Link>
        ))}
      </Sidebar>
    </>
  );
};

export default SidebarContainer;
