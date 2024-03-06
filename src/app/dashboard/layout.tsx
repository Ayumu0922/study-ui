import SidebarContainer from "@/components/Sidebar/SidebarContainer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <SidebarContainer />
      {children}
    </div>
  );
};

export default layout;
