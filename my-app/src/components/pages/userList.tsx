import React, { useEffect } from "react";
import { fetchUsersData } from "@/features/users/fetchUsersData";
import { useAppDispatch, useAppSelector } from "@/features/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@/components/atoms/Button";

// 社員情報一覧画面
const UserList = () => {
  const dispatch = useAppDispatch();
  // 取得した社員一覧を取り出す
  const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    // 社員情報一覧取得APIを実行
    dispatch(fetchUsersData());
  }, []);

  return (
    <>
      <div className="bg-white text-xl drop-shadow-lg py-3 px-6 font-mono font-bold">
        利用者情報
      </div>
      <div className="flex">
        <Button text="新規登録" onClick={() => {}}></Button>
      </div>
      <div className="bg-white my-6 mx-5 pt-4 pr-5 pb-14 pl-5">
        <div className="flex border-b border-gray-500">
          <div className="text-xl py-4 px-6 font-mono font-bold">
            利用者情報リスト
          </div>
          <div className="pt-6 mr-5 ml-auto text-sm">全{users.length}件</div>
        </div>
        {users.map((user) => {
          return (
            <a
              href={`/user/${user.user_id}`}
              className="px-3 py-4 border-b border-gray-200 flex"
            >
              <div className="mr-3 mix-blend-difference text-gray-400">
                <AccountCircleIcon />
              </div>
              <div className="mr-3">{user.user_id}</div>
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
