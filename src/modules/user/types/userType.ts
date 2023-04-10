import React from "react";

export type UserType = {
  id: number;
  username: string;
};

export type UserContextType = {
  user: UserType | null;
  isLogin: (username: string) => Promise<void>;
};

export type UserProviderProps = {
  children: React.ReactNode;
};
