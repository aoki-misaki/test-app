import React from "react";
import PersonIcon from '@mui/icons-material/Person';

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <nav className="fixed h-[100%] w-[230px] bg-mainColor">サイドメニュー</nav>
    <Personlcon/>
  );
};

export default SideMenu;
