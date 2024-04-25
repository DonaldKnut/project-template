import React from "react";
import MobileSidebar from "./mobile-sidebar";
import { NavbarRoutes } from "@/components/navbar-routes";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-green-800 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
