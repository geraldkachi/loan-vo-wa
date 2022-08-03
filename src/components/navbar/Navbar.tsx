import React from "react";
import Logo from "../../images/logo.png";

export const Navbar = ({ transparent }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="absolute px-10 py-3 h-11 z-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={Logo} />
          </div>
        </div>
      </nav>
    </>
  );
}
