import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { cities, services } from "@/utils/data";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Right section: header + main content */}
      <div className="flex flex-col flex-1 h-full overflow-hidden bg-neutral-950 text-white">
        {/* <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900"> */}

        {/* <Header /> */}
        {/* <Header open={open} setOpen={setOpen} cities={cities} /> */}

        {/* Scrollable main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
          <Footer services={services} cities={cities} />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
