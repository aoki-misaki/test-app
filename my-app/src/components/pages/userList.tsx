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

  
  return (
    <div>
    <div>利用者情報</div>
    <button class="inline-flex h-12 items-center justify-center rounded-md bg-sky-500 px-6 font-medium text-neutral-50 transition active:scale-110 ">新規登録</button>
    <div>利用者情報リスト</div>
    <div>全{users.length}件</div>
    ｛
      users.map((user)=>{
       return(
      <div>users</div>
      })
      ｝
  </div>;
  );
export default UserList;
