import MainLayout from "../../../common/layouts/MainLayout";
import Login from "../components/Login";
import { useUser } from "../hooks/useUser";

const UserInfo = () => {
  const { user } = useUser();
  return (
    <MainLayout>
      <div className="flex justify-center">
        {user ? (
          <div>
            <h1>Hello {user.username}</h1>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </MainLayout>
  );
};

export default UserInfo;
