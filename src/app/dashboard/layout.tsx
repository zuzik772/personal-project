import { PropsWithChildren } from "react";
import Sidebar from "../components/Sidebar";
import GlobalContextProvider from "../context/GlobalContextProvider";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <GlobalContextProvider>
      <Sidebar />
      <div className="h-screen ml-60 flex flex-col gap-8 p-10">{children}</div>
    </GlobalContextProvider>
  );
};

export default DashboardLayout;
