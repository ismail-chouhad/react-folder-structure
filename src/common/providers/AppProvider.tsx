import UserProvider from "../../modules/user/providers/UserProvider";
import RootRouter from "../routers/RootRouter";

const AppProvider = () => {
  return (
    <UserProvider>
      <RootRouter />
    </UserProvider>
  );
};

export default AppProvider;
