import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
