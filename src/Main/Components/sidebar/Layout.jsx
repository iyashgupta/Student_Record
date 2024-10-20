import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar"; // Adjust the import path if needed

const Layout = () => {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Sidebar /> {/* Sidebar visible on all relevant routes */}
        <Outlet /> 
    </div>
  );
};

export default Layout;
