import React, { useEffect } from "react";
import { fetchUsersData } from "@/features/users/fetchUesrsData";
import { useAppDispatch, useAppSelector } from "@/features/store";

// 社員情報一覧画面
const UserList = () => {
  const dispatch = useAppDispatch();
  // 取得した社員一覧を取り出す
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    // 社員情報一覧取得APIを実行
    dispatch(fetchUsersData());
  });

  // TODO メインコンテンツ部分を実装したら消す
  console.log(users);

[
   {
    id:00001,
    name:"山田　太郎",
   },
  {
    id:00002,
    name:"佐藤　鮎美"
  }
   ]
  
  return (
    <>
    <>利用者情報</>
    <button class="inline-flex h-12 items-center justify-center rounded-md bg-sky-500 px-6 font-medium text-neutral-50 transition active:scale-110 ">新規登録</button>
    <>利用者情報リスト</>
    <>全{userList.length}件</>
    ｛
      users.map(()=>{
      })
      ｝
  </>;
  );
};
export default UserList;
