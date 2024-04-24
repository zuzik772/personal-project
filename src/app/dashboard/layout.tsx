import { PropsWithChildren } from "react";
import Sidebar from "../components/Sidebar";
import GlobalContextProvider from "../context/GlobalContextProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};
const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <GlobalContextProvider>
      <Sidebar />
      <div className="h-screen lg:ml-60 flex flex-col w-full lg:gap-8 gap-6 lg:p-10 pt-4 lg:pt-0 p-4">
        {children}
      </div>
    </GlobalContextProvider>
  );
};

export default DashboardLayout;
