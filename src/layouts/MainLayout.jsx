import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const MainLayout = () => {

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Right section: header + main content */}
      <div className="flex flex-col flex-1 h-full overflow-hidden bg-neutral-950 text-white">

        {/* <Header /> */}

        {/* Scrollable main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
