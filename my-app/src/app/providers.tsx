"use client";

import { store } from "@/features/store";
import { Provider } from "react-redux";

// Storeの提供範囲を設定
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
