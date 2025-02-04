import React from "react";
import SideMenu from "@/components/organisms/sideMenu";

type Props = {
  children: React.ReactNode;
};

const MainTemplate = (props: Props) => {
  return (
    <div className="grid grid-cols-[230px_1fr] h-[100vh]">
      <div>
        <SideMenu />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default MainTemplate;
