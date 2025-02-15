import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersResponce, fetchUsersData } from "@/features/users/fetchUesrsData";

export type UsersState = {
  users: UsersResponce["data"]["users"];
  loading: boolean;
  error: string | null;
};

// 初期値
const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 保留
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // 成功
      .addCase(
        fetchUsersData.fulfilled,
        (state, action: PayloadAction<UsersResponce>) => {
          state.users = action.payload.data.users;
          state.loading = false;
        }
      )
      // 失敗
      .addCase(fetchUsersData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      });
  },
});

export default usersSlice.reducer;
