import React from "react";
import Sidebar from "../components/Sidebar"; 
import { SidebarProps } from "../types/SidebarProps";



const SidebarPage: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> 
    </div>
  );
};

export default SidebarPage;
