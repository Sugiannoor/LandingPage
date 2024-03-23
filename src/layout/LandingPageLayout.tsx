import NavbarComponents from "@/components/NavbarComponents";
import { Outlet } from "react-router-dom";

export const LandingPageLayout = () => {
  return (
    <div className="w-100 2xl:w-[90%] 2xl:mx-auto">
      <NavbarComponents/>
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
};
