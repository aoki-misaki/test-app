import React from "react";
import PersonIcon from '@mui/icons-material/Person';

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <nav className="fixed h-[100%] w-[230px] bg-mainColor text-white">
     <a href="/">
      <div className= "sideMemuText">
       <<div>TestApp</div>    
       <div> <PersonIcon/> 社員情報管理</div>
      </div>
     </a>
    </nav>
  );
};

export default SideMenu;
