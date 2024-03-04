import React, { ReactNode } from "react";

export interface SidebarProps {
  children: ReactNode;
}

export interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
