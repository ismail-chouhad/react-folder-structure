import { createContext, useState } from "react";
import {
  UserContextType,
  UserProviderProps,
  UserType,
} from "../types/userType";

export const UserContext = createContext<UserContextType>({
  user: null,
  isLogin: async () => {},
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  const isLogin = async (username: string) => {
    const userRes = await fetch("/users.json");
    const userData = (await userRes.json()) as UserType[];
    const matchingUser = userData.find((user) => user.username === username);
    if (matchingUser) {
      setUser(matchingUser);
    } else {
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, isLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
