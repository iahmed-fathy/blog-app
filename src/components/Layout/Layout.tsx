import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div className="px-40 max-sm:px-10 max-lg:px-20 py-10 font-work">
      <Header />
      <Outlet />
    </div>
  );
}
