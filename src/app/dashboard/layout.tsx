import { PropsWithChildren } from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
