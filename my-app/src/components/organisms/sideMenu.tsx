import React from "react";
import PersonIcon from '@mui/icons-material/Person';

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <nav className="fixed h-[100%] w-[230px] bg-mainColor">
     <a href="/">
      <div>
       <div className="text-white text-3xl font-bold mt-8">TestApp</div>
       <div className="text-white mt-8"> <PersonIcon/> 社員情報管理</div>
      </div>
     </a>
    </nav>
  );
};

export default SideMenu;
