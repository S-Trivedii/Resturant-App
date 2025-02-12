import { Footer } from "@/components/Footer";
import { Navabar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navabar />
      </header>

      <div className="flex-1">
        {/* This Outlet is where the child route's element gets rendered */}
        <Outlet />
      </div>

      <>
        <Footer />
      </>
    </div>
  );
};
