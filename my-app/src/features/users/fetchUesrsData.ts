import { config } from "@/libs/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type UsersResponce = {
  data: {
    users: {
      // 社員番号
      user_id: number;
      // 名
      name_mei: string;
      // 姓
      name_sai: string;
    }[];
  };
};

// 社員情報一覧取得API
export const fetchUsersData = createAsyncThunk<UsersResponce>(
  "fetchUsersData",
  async () => {
    const res = await axios.get(`${config.apiPrefix}/test_app/users`);
    return await res.data;
  }
);
