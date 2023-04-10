import { UserType } from "../../user/types/userType";

export type PostType = {
  id: number;
  title: string;
  description: string;
  date: string;
  userId: number;
  user?: UserType;
};
