"use client";
import React, { useState } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { CiSettings } from "react-icons/ci";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";

const SidebarContainer = () => {
  const [activeItem, setActiveItem] = useState("患者一覧");
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  return (
    <>
      <Sidebar>
        <SidebarItem
          icon={<FaUsers size={30} />}
          text="患者一覧"
          active={activeItem === "患者一覧"}
          alert={false}
          onClick={() => handleItemClick("患者一覧")}
        />
        <SidebarItem
          icon={<FaFolderOpen size={30} />}
          text="フォルダ"
          active={activeItem === "フォルダ"}
          alert={false}
          onClick={() => handleItemClick("フォルダ")}
        />
        <SidebarItem
          icon={<MdAnalytics size={30} />}
          text="画像解析"
          active={activeItem === "画像解析"}
          alert={false}
          onClick={() => handleItemClick("画像解析")}
        />
        <SidebarItem
          icon={<CiSettings size={30} />}
          text="設定"
          active={activeItem === "設定"}
          onClick={() => handleItemClick("設定")}
        />
        <SidebarItem
          icon={<IoMdHelpCircle size={30} />}
          text="ヘルプ"
          active={activeItem === "ヘルプ"}
          alert={true}
          onClick={() => handleItemClick("ヘルプ")}
        />
      </Sidebar>
    </>
  );
};

export default SidebarContainer;
