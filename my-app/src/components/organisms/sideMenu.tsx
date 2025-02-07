import React from "react";
import PersonIcon from '@mui/icons-material/Person';

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <a href="/">
     <Personlcon/>
     <div>社員情報<div/>
    </a>
    <nav className="fixed h-[100%] w-[230px] bg-mainColor">サイドメニュー</nav>
  );
};

export default SideMenu;
