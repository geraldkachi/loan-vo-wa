import { AIactivityoutlin, AImenu1Outlin } from "arvara-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { sidebarChildren } from "./SidebarChildren";
import { useWindowDimensions } from "arvara";

const Sidebar = () => {
  const [activePath, setActivePath] = useState("dashboard");
  const location = useLocation();
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);
  const { width } = useWindowDimensions();
  return (
    <div className={width > 1200 ? "w-72 bg-white" : "bg-white"}>
      <div className="ml-3">
        <div className="block ml-5">
          {width > 1200 && (
            <p className="p-3 sidebar_header inline-block">LOGO</p>
          )}
          <div className={width > 1200 ? `float-right p-5` : "ml-3"}>
            <AImenu1Outlin />
          </div>
        </div>

        {sidebarChildren.map((item, index) => (
          <Link to={item.path} key={index}>
            <div
              className={
                activePath === item.path
                  ? "flex p-3 txt_blue rounded-lg m-5 text-white"
                  : "flex p-3 mt-10 m-5"
              }
            >
              <div className="inline-block">{item.icon}</div>
              <p
                className={`inline-block pl-3 ${
                  activePath === item.path ? "sidebar_text_2" : "sidebar_text"
                }`}
              >
                {width > 1200 && item.name}
              </p>
            </div>
          </Link>
        ))}

        <div className="flex p-3 mt-16 m-5">
          <div className="inline-block">
            <AIactivityoutlin />
          </div>
          {width > 1200 && <p className="inline-block pl-3 text-center sidebar_text">Logout</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
