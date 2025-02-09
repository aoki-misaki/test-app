import React from "react";
import PersonIcon from '@mui/icons-material/Person';

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <nav className="fixed h-[100%] w-[230px] bg-mainColor">
     <a href="/">
      <div>
       <div className="text-white text-3xl font-bold mt-5 ml-5">TestApp</div>
       <div className="text-white mt-8 ml-5 items-center"> <PersonIcon/> 社員情報管理</div>
      </div>
     </a>
    </nav>
  );
};

export default SideMenu;
