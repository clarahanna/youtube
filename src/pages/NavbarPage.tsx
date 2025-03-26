import React from "react";
import Navbar from "../components/Navbar"; 
import { NavbarPageProps } from "../types/navbarPageProps";


const NavbarPage: React.FC<NavbarPageProps> = ({ toggleSidebar }) => {
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} /> 
    </div>
  );
};

export default NavbarPage;
