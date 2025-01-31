import Navbar from "../../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ArrowUp from "../../Components/ArrowUp/ArrowUp";
import { useEffect } from "react";
function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <div className="  w-[85%] md:w-[80%] mx-auto">
        <ArrowUp />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
