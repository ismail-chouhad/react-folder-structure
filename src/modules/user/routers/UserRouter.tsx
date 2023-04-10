import { Route, Routes } from "react-router-dom";
import UserInfo from "../pages/UserInfo";
import NotFound from "../../../common/pages/NotFound";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<UserInfo />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRouter;
