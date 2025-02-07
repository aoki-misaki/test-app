import React from "react";
import PersonIcon from '@mui/icons-material/Person';

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <nav className="fixed h-[100%] w-[230px] bg-mainColor">
    <a href="/">
     <div>TestApp</div>
     <PersonIcon/>
     <div>社員情報管理</div>
    </a>
    </nav>
  );
};

export default SideMenu;
