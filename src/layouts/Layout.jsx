import { Outlet } from "react-router-dom";
// import { Sidebar, Titlebar } from "../components/layout/admin-layout";
import sidebarItems from "../constants/sidebarItems";
import Sidebar from "../components/Sidebar";
import TitleBar from "../components/Titlebar";

const Layout = () => {
  return (
    // <div className="flex flex-row h-screen max-w-[1980px] mx-auto overflow-hidden">
    <div className="flex flex-row h-screen w-full mx-auto overflow-hidden overflow-y-scroll bg-[#eeeeee]">
      <Sidebar sidebarItems={sidebarItems} />
      <div className="flex-1 flex flex-col">
        <div className="w-full max-w-[1440px] h-screen mx-auto">
          <TitleBar />
          <div className="flex-1 overflow-y-auto pt-10 sm:pt-0 px-2 sm:px-0">
            {<Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
