import React, { useEffect } from "react";
import { fetchUsersData } from "@/features/users/fetchUsersData";
import { useAppDispatch, useAppSelector } from "@/features/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// 社員情報一覧画面
const UserList = () => {
  const dispatch = useAppDispatch();
  // 取得した社員一覧を取り出す
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    // 社員情報一覧取得APIを実行
    dispatch(fetchUsersData());
  }, []);

  // TODO メインコンテンツ部分を実装したら消す
  console.log(users);

  return (
    <>
      <div className="bg-white text-xl drop-shadow-lg py-3 px-6 font-mono font-bold">
        利用者情報
      </div>
      <div className="flex">
        <div></div>
        <button className="ml-auto mr-5 px-7 mt-6 inline-flex h-12 items-center justify-center rounded-md bg-sky-700 font-medium text-neutral-50 transition active:scale-110">
          新規登録
        </button>
      </div>
      <div className="bg-white mt-6 mx-5 pt-4 pr-5 pb-14 pl-5">
        <div className="flex border-b border-gray-500">
          <div className="text-xl py-4 px-6 font-mono font-bold">
            利用者情報リスト
          </div>
          <div className="pt-6 mr-5 ml-auto text-sm">全{users.length}件</div>
        </div>
        {users.map((user) => {
          return (
            <a
              href="/user/${user_id}"
              className="px-3 py-4 border-b border-gray-200 flex"
            >
              <div className="ml-5 mr-5 mix-blend-difference text-gray-400">
                <AccountCircleIcon />
              </div>
              <div className="mr-5">{user.user_id}</div>
              <div className="mr-2">{user.name_sei}</div>
              <div>{user.name_mei}</div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
