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
  return <>利用者情報リスト</>;
};

export default UserList;
