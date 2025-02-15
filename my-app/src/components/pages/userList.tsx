import React from "react";

type Props = {};

const UserList = (props: Props) => {
  return (
  <div>
   <div>社員情報リスト</div>
   <div>全{
    UserList.length
      }件</div>
   </div>
    );
};

export default UserList;
